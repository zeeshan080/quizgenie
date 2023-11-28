import json
from flask import Flask, request
from flask_cors import CORS
from openai.types.chat.chat_completion import ChatCompletion
from openai import OpenAI
from dotenv import load_dotenv, find_dotenv
import os

app = Flask(__name__)
CORS(app)


_: bool = load_dotenv(find_dotenv())  # read local .env file

client: OpenAI = OpenAI()


# route for getting all the todos
@app.route("/api/todos", methods=["GET"])
def get_todos():
    return {"todos": todos, "message": "success", "status": 200}


# route for adding a todo
@app.route("/api/text-quiz", methods=["POST"])
def create_text_quiz():
    # get post data from the request body
    text_quiz = request.json.get("text_quiz")
    gpt_prompt = ""
    if text_quiz["quizOption"] == "text":
        gpt_prompt += f"""Your have to act as an Exam Question Generation assistant. You are here to assist me in creating questions for my subject exams. 
          For this you need the following details:
          Data: Will be provided in the form of short or long text and you need to use the text to create the question ONLY. Do not use material from outside it.
          Subject Knowledge Base: knowledge base (Metric, Intermidate, Masters, PHD) the difficulty of mcqs need to match the knowledge base of provided user.
          Preferred Language: Specify the language in which you want the questions. (English, Urdu, Arabic, etc.)
          Number of Questions: the total number of questions to generate.
          """

        if text_quiz["questionType"] == "mcqs":
            gpt_prompt += f"Question Type: Only create MCQs with options and correct answer and its explanation."
        elif text_quiz["questionType"] == "shortqa":
            gpt_prompt += f"Question Type: Only create short answer questions with correct answer and its explanation."
        elif text_quiz["questionType"] == "fillblanks":
            gpt_prompt += f"Question Type: Only create fill in the blanks questions with correct answer and its explanation."

        gpt_prompt += f"""Your response should be strictly JSON format. 
        {{"id": "unique auto increment","question": "question", 
        "options": ["option1", "option2", "option3", "option4", "can have more options if you think it should have"], 
        "answer": "answer", 
        "explanation": "explanation"}}
        Here is what you need to do:
        You need to create {text_quiz["noOfQuestions"]} questions 
        from the following text inside tags <text></text>: 
        <text>{text_quiz["textArea"]}</text> in {text_quiz["language"]} language.
        The knowledge base is {text_quiz["educationLevel"]}
        """

        response = client.chat.completions.create(
            model="gpt-3.5-turbo-1106",
            response_format={"type": "json_object"},
            messages=[{"role": "system", "content": gpt_prompt}],
        )

    jsonResponse = json.loads(response.choices[0].message.content)
    return  jsonResponse


# route for deleting a todo
@app.route("/api/todo/<int:id>", methods=["DELETE"])
def delete_todo(id):
    # get the todo id from the url
    todo_id = id
    global todos
    # delete the todo from the todos list
    todos = [todo for todo in todos if todo["id"] != str(todo_id)]
    return {"message": "success", "status": 200}


# route for updating a todo
@app.route("/api/todo/<int:id>", methods=["PUT"])
def update_todo(id):
    # get the todo id from the url
    todo_id = id
    # get the todo from the request body
    todoNew = request.json.get("todo")
    global todos
    # update the todo in the todos list
    todoPrev = next((todo for todo in todos if todo["id"] == str(todo_id)), None)
    if todoPrev:
        todoPrev["id"] = todoNew["id"]
        todoPrev["title"] = todoNew["title"]
        todoPrev["status"] = todoNew["status"]
        return {"todo": todoNew, "message": "success", "status": 200}

    return {"message": "not found", "status": 404}


@app.route("/api/status", methods=["GET"])
def status():
    return "API is up and running!"


if __name__ == "__main__":
    app.run()

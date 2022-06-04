from flask import Flask,render_template,request
import pyttsx3
import speech_recognition as sr
from datetime import datetime


engine = pyttsx3.init('sapi5')
voices = engine.getProperty('voices')
print(voices[1].id)
engine.setProperty('voice',voices[0].id)

def speak(audio):
    engine.say(audio)
    engine.runAndWait()
    

def wishMe():
    hour = int(datetime.now().hour)
    if hour >= 0 and hour <= 12:
        speak("""
        `good morning,
        I'm your guider , we thanks you for clicking in our voice assistant of the moscow technical university of communication and informatics.
        we are going to guide you for all thing you want to know about our university.

        for knowing about the university, his history , say one.
        for knowing about the faculties ,says two.
        for having an appointment ,say three.
        for call out ,say four or end.`
        """)

    elif hour >= 12 and hour <= 18:
        speak("""
        good afternoom,
        I'm your guider , we thanks you for clicking in our voice assistant of the moscow technical university of communication and informatics.
        we are going to guide you for all thing you want to know about our university.

        for knowing about the university, his history , say one.
        for knowing about the faculties ,says two.
        for having an appointment ,say three.
        for call out ,say four or end.
        """)
        
    else:
        speak("""
        good evening,
        I'm your guider , we thanks you for clicking in our voice assistant of the moscow technical university of communication and informatics.
        we are going to guide you for all thing you want to know about our university.

        for knowing about the university, his history , say one.
        for knowing about the faculties ,says two.
        for having an appointment ,say three.
        for call out ,say four or end.
        
        """)
       

app = Flask(__name__) 

#Main Homepage
@app.route('/')
def home():
    return render_template("home.html")

@app.route('/about/')
def about():
    return render_template("about.html")

@app.route('/contact/')
def contact():
    return render_template("contact.html")

@app.route('/address/')
def address():
    return render_template("address_map.html")

@app.route('/route/')
def route():
    return render_template("action.html")

@app.route('/rien/')
def rien():
    wishMe()
    return render_template("rien.html")

if __name__ == "__main__":
    app.run(debug=True)
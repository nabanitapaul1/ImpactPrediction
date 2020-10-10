#!/usr/bin/env python
# coding: utf-8



import numpy as np
from flask import Flask, render_template, request,jsonify
import pickle
#import os
app = Flask(__name__)
model = pickle.load(open('model.pkl', 'rb'))
#os.chdir("D:/New folder/Final/Deployment")
@app.route('/')
#@app.route('/home',methods = ['GET'])
def home():
    return render_template('index.html')

#@app.route('/')
#def runit():
#    return render_template('index.html')

  
@app.route('/impact',methods=['POST'])
def impact():
    
    if request.method == 'POST':
        
        id_status = request.form['id_status']
        
        id_caller = request.form['id_caller']
        
        opened_by = request.form['opened_by']
        created_by = request.form['created_by']
        updated_by = request.form['updated_by']
        type_contact = request.form['type_contact']
        location= request.form['location']
        category_ID = request.form['category_ID']
        user_symptom = request.form['user_symptom']
        support_group = request.form['support_group']
        support_incharge = request.form['support_incharge']
        doc_knowledge= request.form['doc_knowledge']
        confirmation_check= request.form['confirmation_check']
        
        arr= np.array([[id_status,id_caller,opened_by,created_by,updated_by,type_contact,location,category_ID,user_symptom,
        support_group,support_incharge,doc_knowledge,confirmation_check]])
      
        predicted_value=model.predict(arr)
        
        print(predicted_value.item(0))
        output=predicted_value.item(0)
        print(output)
        
        return render_template("index.html", prediction_text = 'Impact for the incident  is {}'.format(output))
    else:
        
        return render_template("index.html")
        
if __name__ == "__main__":
    app.run(debug=False)
    







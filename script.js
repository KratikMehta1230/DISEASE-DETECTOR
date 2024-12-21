
document.getElementById('disease-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
// Retrieve and process the input
    const symptomsInput = document.getElementById('symptoms').value.toLowerCase();
    const symptomsArray = symptomsInput.split(',').map(symptom => symptom.trim());
    const resultDiv = document.getElementById('result');

    // Comprehensive list of diseases, their associated symptoms, medicines, doctors in India
    const diseases = {
     "flu": {
            symptoms: ["fever", "cough", "sore throat", "muscle aches"],
            medicines: ["Antipyretics", "Cough suppressants", "Decongestants"],
            doctor: "Primary Care Physician",
            topDoctors: [
                { name: "Dr. Randeep Guleria", city: "Delhi" },
                { name: "Dr. Devi Shetty", city: "Bangalore" },
                { name: "Dr. Naresh Trehan", city: "Delhi" }
            ]
        },
        "cold": {
            symptoms: ["runny nose", "sore throat", "cough"],
            medicines: ["Antihistamines", "Decongestants"],
            doctor: "Primary Care Physician",
            topDoctors: [
                { name: "Dr. Randeep Guleria", city: "Delhi" },
                { name: "Dr. Devi Shetty", city: "Bangalore" },
                { name: "Dr. Naresh Trehan", city: "Delhi" }
            ]
        },
        "covid-19": {
            symptoms: ["fever", "cough", "loss of taste", "difficulty breathing"],
            medicines: ["Antivirals", "Steroids", "Supportive care"],
            doctor: "Infectious Disease Specialist",
            topDoctors: [
                { name: "Dr. Randeep Guleria", city: "Delhi" },
                { name: "Dr. Devi Shetty", city: "Bangalore" },
                { name: "Dr. Naresh Trehan", city: "Delhi" }
            ]
        },
        "asthma": {
            symptoms: ["shortness of breath", "wheezing", "chest tightness"],
            medicines: ["Bronchodilators", "Corticosteroids"],
            doctor: "Pulmonologist",
            topDoctors: [
                { name: "Dr. Sandeep Soni", city: "Delhi" },
                { name: "Dr. G. C. Khilnani", city: "Delhi" },
                { name: "Dr. S. K. Chhabra", city: "Delhi" }
            ]
        },
        "diabetes": {
            symptoms: ["increased thirst", "frequent urination", "fatigue"],
            medicines: ["Insulin", "Metformin"],
            doctor: "Endocrinologist",
            topDoctors: [
                { name: "Dr. V. Mohan", city: "Chennai" },
                { name: "Dr. Shantharam S.", city: "Bangalore" },
                { name: "Dr. Arun Kumar Gupta", city: "Delhi" }
            ]
        },
        "malaria": {
            symptoms: ["fever", "chills", "sweats", "headaches", "nausea"],
            medicines: ["Antimalarials", "Supportive care"],
            doctor: "Infectious Disease Specialist",
            topDoctors: [
                { name: "Dr. Randeep Guleria", city: "Delhi" },
                { name: "Dr. Devi Shetty", city: "Bangalore" },
                { name: "Dr. Naresh Trehan", city: "Delhi" }
            ]
        },
        "typhoid": {
            symptoms: ["fever", "weakness", "stomach pain", "headache", "loss of appetite"],
            medicines: ["Antibiotics", "Supportive care"],
            doctor: "Infectious Disease Specialist",
            topDoctors: [
                { name: "Dr. Randeep Guleria", city: "Delhi" },
                { name: "Dr. Devi Shetty", city: "Bangalore" },
                { name: "Dr. Naresh Trehan", city: "Delhi" }
            ]
        },
        "tuberculosis": {
            symptoms: ["persistent cough", "chest pain", "fatigue", "weight loss", "fever", "night sweats"],
            medicines: ["Antitubercular drugs", "Supportive care"],
            doctor: "Pulmonologist",
            topDoctors: [
                { name: "Dr. G. C. Khilnani", city: "Delhi" },
                { name: "Dr. Sandeep Soni", city: "Delhi" },
                { name: "Dr. S. K. Chhabra", city: "Delhi" }
            ]
        },
        "pneumonia": {
            symptoms: ["fever", "chest pain", "cough", "difficulty breathing"],
            medicines: ["Antibiotics", "Cough suppressants"],
            doctor: "Pulmonologist",
            topDoctors: [
                { name: "Dr. G. C. Khilnani", city: "Delhi" },
                { name: "Dr. Sandeep Soni", city: "Delhi" },
                { name: "Dr. S. K. Chhabra", city: "Delhi" }
            ]
        },
        "allergies": {
            symptoms: ["sneezing", "itchy eyes", "runny nose", "skin rash"],
            medicines: ["Antihistamines", "Nasal sprays"],
            doctor: "Allergist",
            topDoctors: [
                { name: "Dr. Randeep Guleria", city: "Delhi" },
                { name: "Dr. Devi Shetty", city: "Bangalore" },
                { name: "Dr. Naresh Trehan", city: "Delhi" }
            ]
        },
        "bronchitis": {
            symptoms: ["cough", "mucus production", "shortness of breath"],
            medicines: ["Cough suppressants", "Bronchodilators"],
            doctor: "Pulmonologist",
            topDoctors: [
                { name: "Dr. G. C. Khilnani", city: "Delhi" },
                { name: "Dr. Sandeep Soni", city: "Delhi" },
                { name: "Dr. S. K. Chhabra", city: "Delhi" }
            ]
        },
   "cavities": {
            symptoms: ["toothache", "sensitivity to hot or cold", "visible holes or pits in teeth"],
            medicines: ["Tooth filling", "Fluoride treatment"],
            doctor: "Dentist",
            topDoctors: [
                { name: "Dr. Rajeev Kumar", city: "Delhi" },
                { name: "Dr. Nikhil Verma", city: "Mumbai" },
                { name: "Dr. Sandeep Soni", city: "Bangalore" }
            ]
        },
        "gingivitis": {
            symptoms: ["red, swollen gums", "bleeding gums", "bad breath", "receding gums"],
            medicines: ["Antiseptic mouthwash", "Antibiotics", "Professional cleaning"],
            doctor: "Periodontist",
            topDoctors: [
                { name: "Dr. P. K. Ghosh", city: "Delhi" },
                { name: "Dr. M. S. Chawla", city: "Mumbai" },
                { name: "Dr. S. S. Jaiswal", city: "Bangalore" }
            ]
        },
        "periodontitis": {
            symptoms: ["severe gum inflammation", "tooth mobility", "gum recession", "pus around teeth"],
            medicines: ["Scaling and root planing", "Antibiotics", "Gum grafting"],
            doctor: "Periodontist",
            topDoctors: [
                { name: "Dr. Rajeev Kumar", city: "Delhi" },
                { name: "Dr. Amit Garg", city: "Mumbai" },
                { name: "Dr. Naveen Kumar", city: "Chennai" }
            ]
        },
        "tooth_decay": {
            symptoms: ["persistent toothache", "sensitivity", "discoloration of teeth"],
            medicines: ["Tooth fillings", "Root canal treatment"],
            doctor: "Dentist",
            topDoctors: [
                { name: "Dr. Nikhil Verma", city: "Mumbai" },
                { name: "Dr. Deepak Prakash", city: "Delhi" },
                { name: "Dr. Sandeep Soni", city: "Bangalore" }
            ]
        },
        "oral_cancer": {
            symptoms: ["mouth sores", "difficulty swallowing", "persistent mouth pain", "unexplained bleeding"],
            medicines: ["Surgical removal", "Radiotherapy", "Chemotherapy"],
            doctor: "Oncologist",
            topDoctors: [
                { name: "Dr. Rajendra Kumar", city: "Delhi" },
                { name: "Dr. Sandeep Garg", city: "Mumbai" },
                { name: "Dr. Vinay Kumar", city: "Chennai" }
            ]
        },
        "tooth_infection": {
            symptoms: ["pain in the tooth", "swelling of the gums", "pus or abscess around the tooth"],
            medicines: ["Antibiotics", "Root canal treatment", "Tooth extraction"],
            doctor: "Dentist",
            topDoctors: [
                { name: "Dr. Priya Verma", city: "Delhi" },
                { name: "Dr. Naveen Kumar", city: "Bangalore" },
                { name: "Dr. Asha Rani", city: "Chennai" }
            ]
        },
        "bruxism": {
            symptoms: ["grinding or clenching teeth", "jaw pain", "headaches", "worn down teeth"],
            medicines: ["Mouthguards", "Relaxation techniques", "Botox injections"],
            doctor: "Dentist",
            topDoctors: [
                { name: "Dr. Rajeev Kumar", city: "Delhi" },
                { name: "Dr. Sandeep Soni", city: "Bangalore" },
                { name: "Dr. Nikhil Verma", city: "Mumbai" }
            ]
        },
        "sensitive_teeth": {
            symptoms: ["pain when eating cold or hot foods", "tooth discomfort", "sharp pain"],
            medicines: ["Fluoride toothpaste", "Desensitizing treatments", "Gum grafting"],
            doctor: "Dentist",
            topDoctors: [
                { name: "Dr. Rajeev Kumar", city: "Delhi" },
                { name: "Dr. Amit Garg", city: "Mumbai" },
                { name: "Dr. Naveen Kumar", city: "Chennai" }
            ]
        },
        "oral_hygiene": {
            symptoms: ["bad breath", "yellow teeth", "gum disease", "plaque buildup"],
            medicines: ["Fluoride toothpaste", "Mouthwash", "Professional cleaning"],
            doctor: "Dentist",
            topDoctors: [
                { name: "Dr. Priya Verma", city: "Delhi" },
                { name: "Dr. Sandeep Soni", city: "Bangalore" },
                { name: "Dr. Rajeev Kumar", city: "Mumbai" }
            ]
        },
        "wisdom_tooth": {
            symptoms: ["pain in the back of the mouth", "swollen gums", "difficulty opening the mouth"],
            medicines: ["Pain relievers", "Antibiotics", "Surgical extraction"],
            doctor: "Oral Surgeon",
            topDoctors: [
                { name: "Dr. Asha Rani", city: "Chennai" },
                { name: "Dr. Priya Verma", city: "Delhi" },
                { name: "Dr. Sandeep Soni", city: "Bangalore" }
            ]
        },
        "tooth_loss": {
            symptoms: ["loose teeth", "receding gums", "pain in the gums"],
            medicines: ["Dental implants", "Bridges", "Dentures"],
            doctor: "Prosthodontist",
            topDoctors: [
                { name: "Dr. Rajeev Kumar", city: "Delhi" },
                { name: "Dr. Nikhil Verma", city: "Mumbai" },
                { name: "Dr. Sandeep Soni", city: "Bangalore" }
            ]
        },
        "halitosis": {
            symptoms: ["bad breath", "dry mouth", "unpleasant taste in mouth"],
            medicines: ["Mouthwash", "Tongue scrapers", "Hydration"],
            doctor: "Dentist",
            topDoctors: [
                { name: "Dr. Priya Verma", city: "Delhi" },
                { name: "Dr. Amit Garg", city: "Mumbai" },
                { name: "Dr. Asha Rani", city: "Chennai" }
            ]
        },    
        "dental_abscess": {
            symptoms: ["severe toothache", "swelling of the gums", "pus around the tooth"],
            medicines: ["Antibiotics", "Root canal treatment", "Drainage of abscess"],
            doctor: "Dentist",
            topDoctors: [
                { name: "Dr. Rajeev Kumar", city: "Delhi" },
                { name: "Dr. Deepak Prakash", city: "Delhi" },
                { name: "Dr. Naveen Kumar", city: "Chennai" }
            ]
        },
        "tmj_disorder": {
            symptoms: ["jaw pain", "clicking or popping sound in jaw", "difficulty chewing"],
            medicines: ["Pain relievers", "Mouthguards", "Physical therapy"],
            doctor: "Oral Surgeon",
            topDoctors: [
                { name: "Dr. Rajeev Kumar", city: "Delhi" },
                { name: "Dr. Sandeep Soni", city: "Bangalore" },
                { name: "Dr. Nikhil Verma", city: "Mumbai" }
            ]
        }, 
        "migraine": {
            symptoms: ["headache", "nausea", "sensitivity to light", "sensitivity to sound"],
            medicines: ["Pain relievers", "Triptans"],
            doctor: "Neurologist",
            topDoctors: [
                { name: "Dr. A. S. Dhir", city: "Delhi" },
                { name: "Dr. Ashok Garg", city: "Delhi" },
                { name: "Dr. R. N. S. Gupta", city: "Delhi" }
            ]
        },
        "hypertension": {
            symptoms: ["headache", "chest pain", "shortness of breath", "fatigue"],
            medicines: ["Antihypertensives", "Diuretics"],
            doctor: "Cardiologist",
            topDoctors: [
                { name: "Dr. Naresh Trehan", city: "Delhi" },
                { name: "Dr. S. S. Bansal", city: "Delhi" },
                { name: "Dr. K. K. Aggarwal", city: "Delhi" }
            ]
        },
        "anemia": {
            symptoms: ["fatigue", "pale skin", "shortness of breath", "dizziness"],
            medicines: ["Iron supplements", "Vitamin B12"],
            doctor: "Hematologist",
            topDoctors: [
                { name: "Dr. Arvind Kumar", city: "Delhi" },
                { name: "Dr. M. K. Bhan", city: "Delhi" },
                { name: "Dr. S. P. Yadav", city: "Delhi" }
            ]
        },"herniatedDisc": {
        "symptoms": ["back pain", "numbness or tingling in the arms or legs", "weakness", "difficulty moving", "pain that radiates down the legs (sciatica)"],
        "medicines": ["Pain relievers", "Anti-inflammatory drugs", "Muscle relaxants", "Physical therapy", "Epidural steroid injections (in severe cases)"],
        "doctor": "Orthopedic Surgeon or Neurologist",
        "topDoctors": [
            { "name": "Dr. S. K. Agarwal", "city": "Delhi" },
            { "name": "Dr. N. K. Singh", "city": "Mumbai" },
            { "name": "Dr. V. S. Reddy", "city": "Bangalore" }
        ]
    },
    "spinalStenosis": {
        "symptoms": ["pain in the lower back", "numbness or weakness in the legs", "difficulty walking", "pain that worsens with standing or walking"],
        "medicines": ["Pain relievers", "Anti-inflammatory drugs", "Muscle relaxants", "Physical therapy", "Surgical intervention (in severe cases)"],
        "doctor": "Orthopedic Surgeon or Neurologist",
        "topDoctors": [
            { "name": "Dr. Rajesh Kapoor", "city": "Delhi" },
            { "name": "Dr. Arvind Kumar", "city": "Chennai" },
            { "name": "Dr. S. K. Bansal", "city": "Mumbai" }
        ]
    },
    "sciatica": {
        "symptoms": ["sharp pain in the lower back", "pain radiating down the buttocks and legs", "numbness or tingling", "weakness in the legs", "difficulty moving the leg"],
        "medicines": ["Pain relievers", "Anti-inflammatory drugs", "Muscle relaxants", "Physical therapy", "Epidural steroid injections"],
        "doctor": "Orthopedic Surgeon or Neurologist",
        "topDoctors": [
            { "name": "Dr. R. K. Sharma", "city": "Delhi" },
            { "name": "Dr. R. S. Mehta", "city": "Mumbai" },
            { "name": "Dr. Arvind Gupta", "city": "Bangalore" }
        ]
    },
    "sprainOrStrain": {
        "symptoms": ["back pain", "muscle spasms", "stiffness", "pain that worsens with certain movements", "difficulty standing or walking"],
        "medicines": ["Rest", "Pain relievers", "Anti-inflammatory drugs", "Muscle relaxants", "Physical therapy"],
        "doctor": "Orthopedic Surgeon or Physical Therapist",
        "topDoctors": [
            { "name": "Dr. V. S. Reddy", "city": "Hyderabad" },
            { "name": "Dr. Amit Jain", "city": "Delhi" },
            { "name": "Dr. Manoj Sharma", "city": "Mumbai" }
        ]
    },
    "fracturedVertebra": {
        "symptoms": ["severe back pain", "numbness or tingling", "weakness", "difficulty moving", "deformity of the spine", "pain radiating down the legs"],
        "medicines": ["Pain relievers", "Anti-inflammatory drugs", "Surgical intervention (for severe fractures)", "Physical therapy"],
        "doctor": "Orthopedic Surgeon or Neurosurgeon",
        "topDoctors": [
            { "name": "Dr. S. K. Bansal", "city": "Delhi" },
            { "name": "Dr. P. S. Mehta", "city": "Bangalore" },
            { "name": "Dr. Arvind Sharma", "city": "Mumbai" }
        ]
    },
    "whiplash": {
        "symptoms": ["neck pain", "back pain", "muscle stiffness", "headaches", "dizziness", "numbness or tingling in the arms"],
        "medicines": ["Pain relievers", "Anti-inflammatory drugs", "Muscle relaxants", "Ice or heat therapy", "Physical therapy"],
        "doctor": "Orthopedic Surgeon or Rheumatologist",
        "topDoctors": [
            { "name": "Dr. Neeraj Sharma", "city": "Delhi" },
            { "name": "Dr. Sunil Gupta", "city": "Chennai" },
            { "name": "Dr. R. K. Jain", "city": "Mumbai" }
        ]
    },
    "compressionFracture": {
        "symptoms": ["severe pain in the back", "difficulty standing or walking", "numbness or weakness", "deformity of the spine"],
        "medicines": ["Pain relievers", "Anti-inflammatory drugs", "Surgical intervention (for severe fractures)", "Physical therapy", "Bracing or corsets"],
        "doctor": "Orthopedic Surgeon or Neurosurgeon",
        "topDoctors": [
            { "name": "Dr. V. K. Agarwal", "city": "Delhi" },
            { "name": "Dr. Rajeev Kumar", "city": "Mumbai" },
            { "name": "Dr. Pradeep Reddy", "city": "Bangalore" }
        ]
    },
        "appendicitis": {
            symptoms: ["abdominal pain", "fever", "nausea", "loss of appetite"],
            medicines: ["Pain relief", "Antibiotics (before surgery)"],
            doctor: "Surgeon",
            topDoctors: [
                { name: "Dr. Ashok Seth", city: "Delhi" },
                { name: "Dr. P. K. Dave", city: "Delhi" },
                { name: "Dr. M. C. Misra", city: "Delhi" }
            ]
        },  "fracture": {
        "symptoms": ["severe pain", "swelling", "bruising", "deformity", "difficulty moving the hand"],
        "medicines": ["Pain relievers", "Anti-inflammatory drugs", "Cast or splint"],
        "doctor": "Orthopedic Surgeon",
        "topDoctors": [
            { "name": "Dr. R. K. Mishra", "city": "Mumbai" },
            { "name": "Dr. Anjali Mehta", "city": "Delhi" },
            { "name": "Dr. Vikram Sharma", "city": "Bangalore" }
        ]
    },
    "dislocation": {
        "symptoms": ["pain", "swelling", "deformity", "inability to move the joint", "numbness"],
        "medicines": ["Pain relievers", "Anti-inflammatory drugs", "Physical therapy"],
        "doctor": "Orthopedic Surgeon",
        "topDoctors": [
            { "name": "Dr. R. K. Mishra", "city": "Mumbai" },
            { "name": "Dr. Sandeep Soni", "city": "Delhi" },
            { "name": "Dr. Amit Gupta", "city": "Chennai" }
        ]
    },
    "sprain": {
        "symptoms": ["pain", "swelling", "bruising", "limited range of motion", "instability"],
        "medicines": ["Pain relievers", "Anti-inflammatory drugs", "Rest, ice, compression, elevation (R.I.C.E.)"],
        "doctor": "Orthopedic Specialist",
        "topDoctors": [
            { "name": "Dr. Anjali Mehta", "city": "Delhi" },
            { "name": "Dr. Neha Agarwal", "city": "Bangalore" },
            { "name": "Dr. Sanjay Bansal", "city": "Mumbai" }
        ]
    },   "earInfection": {
        "symptoms": ["ear pain", "fluid drainage from the ear", "hearing loss", "fever", "irritability", "difficulty sleeping"],
        "medicines": ["Antibiotics (for bacterial infections)", "Pain relievers", "Ear drops", "Decongestants", "Warm compresses"],
        "doctor": "ENT Specialist (Otolaryngologist)",
        "topDoctors": [
            { "name": "Dr. S. K. Gupta", "city": "Delhi" },
            { "name": "Dr. Arvind Kumar", "city": "Mumbai" },
            { "name": "Dr. Priya Jain", "city": "Bangalore" }
        ]
    },
    "rupturedEardrum": {
        "symptoms": ["sharp ear pain", "hearing loss", "fluid drainage", "tinnitus (ringing in the ear)", "sensation of fullness in the ear"],
        "medicines": ["Antibiotics (to prevent infection)", "Pain relievers", "Eardrops", "Warm compresses", "Surgical intervention (if necessary)"],
        "doctor": "ENT Specialist (Otolaryngologist)",
        "topDoctors": [
            { "name": "Dr. R. K. Singh", "city": "Delhi" },
            { "name": "Dr. V. R. Chawla", "city": "Chennai" },
            { "name": "Dr. R. S. Verma", "city": "Hyderabad" }
        ]
    },
    "swimmer'sEar": {
        "symptoms": ["itching in the ear canal", "redness inside the ear", "fluid drainage", "ear pain", "difficulty hearing"],
        "medicines": ["Antibiotic ear drops", "Pain relievers", "Drying agents (ear drops)", "Warm compresses"],
        "doctor": "ENT Specialist (Otolaryngologist)",
        "topDoctors": [
            { "name": "Dr. Ashish Garg", "city": "Delhi" },
            { "name": "Dr. Meera Sharma", "city": "Mumbai" },
            { "name": "Dr. S. P. Agarwal", "city": "Bangalore" }
        ]
    },
    "hearingLoss": {
        "symptoms": ["difficulty hearing conversations", "asking people to repeat themselves", "muffled sounds", "tinnitus (ringing in the ears)", "feeling of fullness in the ears"],
        "medicines": ["Hearing aids", "Surgical intervention (for certain types of hearing loss)", "Cochlear implants (for severe cases)", "Speech therapy"],
        "doctor": "Audiologist or ENT Specialist (Otolaryngologist)",
        "topDoctors": [
            { "name": "Dr. Sandeep Mehta", "city": "Delhi" },
            { "name": "Dr. R. K. Bansal", "city": "Chennai" },
            { "name": "Dr. Neha Agarwal", "city": "Mumbai" }
        ]
    },
    "foreignObjectInEar": {
        "symptoms": ["pain or discomfort in the ear", "feeling of fullness or blockage", "hearing loss", "irritation or itching in the ear"],
        "medicines": ["Removal of the object by a doctor", "Pain relievers", "Antibiotic ear drops (if infection occurs)"],
        "doctor": "ENT Specialist (Otolaryngologist)",
        "topDoctors": [
            { "name": "Dr. A. R. Sharma", "city": "Delhi" },
            { "name": "Dr. P. S. Chawla", "city": "Mumbai" },
            { "name": "Dr. Rajiv Kumar", "city": "Bangalore" }
        ]
    },
    "earTrauma": {
        "symptoms": ["severe ear pain", "bleeding from the ear", "hearing loss", "dizziness", "tinnitus (ringing in the ears)", "swelling or bruising around the ear"],
        "medicines": ["Pain relievers", "Antibiotics (to prevent infection)", "Surgical intervention (if necessary)", "Corticosteroids (for inflammation)"],
        "doctor": "ENT Specialist (Otolaryngologist)",
        "topDoctors": [
            { "name": "Dr. Manish Kumar", "city": "Delhi" },
            { "name": "Dr. R. C. Verma", "city": "Chennai" },
            { "name": "Dr. S. S. Gupta", "city": "Mumbai" }
        ]
    },
    "tinnitus": {
        "symptoms": ["ringing in the ears", "buzzing or hissing sounds", "feeling of fullness in the ears", "difficulty concentrating due to noise"],
        "medicines": ["Antidepressants (for associated anxiety or depression)", "Antianxiety medications", "Cognitive behavioral therapy", "Sound therapy", "Hearing aids (if associated with hearing loss)"],
        "doctor": "ENT Specialist (Otolaryngologist)",
        "topDoctors": [
            { "name": "Dr. R. S. Mehta", "city": "Mumbai" },
            { "name": "Dr. Neeraj Gupta", "city": "Delhi" },
            { "name": "Dr. Vishal Kumar", "city": "Bangalore" }
        ]
    }, 
     "sinusitis": {
        "symptoms": ["nasal congestion", "headache", "facial pain or pressure", "yellow or green nasal discharge", "fever", "fatigue"],
        "medicines": ["Decongestants", "Pain relievers (acetaminophen, ibuprofen)", "Nasal saline irrigation", "Antibiotics (if bacterial infection)", "Steroids (for inflammation)"],
        "doctor": "ENT Specialist (Otolaryngologist)",
        "topDoctors": [
            { "name": "Dr. Sandeep Goyal", "city": "Delhi" },
            { "name": "Dr. R. S. Mahajan", "city": "Mumbai" },
            { "name": "Dr. N. R. Bansal", "city": "Bangalore" }
        ]
    },
    "rhinitis": {
        "symptoms": ["sneezing", "runny nose", "itchy nose or throat", "nasal congestion", "postnasal drip", "cough"],
        "medicines": ["Antihistamines", "Nasal steroids", "Decongestants", "Saline nasal sprays", "Allergen avoidance measures"],
        "doctor": "Allergist or ENT Specialist",
        "topDoctors": [
            { "name": "Dr. Pradeep Kumar", "city": "Delhi" },
            { "name": "Dr. Arvind Kumar", "city": "Mumbai" },
            { "name": "Dr. P. K. Srivastava", "city": "Chennai" }
        ]
    },
    "deviatedSeptum": {
        "symptoms": ["difficulty breathing through one or both nostrils", "frequent sinus infections", "snoring", "nosebleeds", "headaches", "facial pain"],
        "medicines": ["Decongestants", "Antihistamines", "Nasal steroid sprays", "Surgical intervention (Septoplasty)"],
        "doctor": "ENT Specialist (Otolaryngologist)",
        "topDoctors": [
            { "name": "Dr. Vinod Agarwal", "city": "Delhi" },
            { "name": "Dr. Ajay Prakash", "city": "Bangalore" },
            { "name": "Dr. Meenakshi Tiwari", "city": "Mumbai" }
        ]
    },
    "nasalPolyps": {
        "symptoms": ["nasal congestion", "loss of smell", "runny nose", "facial pressure or pain", "postnasal drip", "snoring"],
        "medicines": ["Nasal corticosteroids", "Oral steroids", "Surgical removal (if necessary)", "Saline nasal irrigation"],
        "doctor": "ENT Specialist (Otolaryngologist)",
        "topDoctors": [
            { "name": "Dr. S. K. Sethi", "city": "Delhi" },
            { "name": "Dr. Rajeev Jain", "city": "Mumbai" },
            { "name": "Dr. Nikhil Chawla", "city": "Chennai" }
        ]
    },
    "epistaxis": {
        "symptoms": ["nosebleeds", "frequent bleeding from one or both nostrils", "difficulty stopping bleeding", "blood in the mucus"],
        "medicines": ["Nasal saline spray", "Cauterization (in case of persistent bleeding)", "Humidifiers", "Steroid nasal sprays (for frequent bleeding)"],
        "doctor": "ENT Specialist (Otolaryngologist)",
        "topDoctors": [
            { "name": "Dr. Ramesh Agarwal", "city": "Delhi" },
            { "name": "Dr. Shilpa Tandon", "city": "Bangalore" },
            { "name": "Dr. A. K. Gupta", "city": "Mumbai" }
        ]
    },
    "anosmia": {
        "symptoms": ["loss or decrease in sense of smell", "difficulty detecting odors", "lack of taste sensation", "nasal congestion", "difficulty in identifying flavors"],
        "medicines": ["Nasal corticosteroids", "Vitamin A supplements", "Smell training", "Treatment of underlying cause (e.g., sinusitis, infection)"],
        "doctor": "ENT Specialist (Otolaryngologist)",
        "topDoctors": [
            { "name": "Dr. Ajit Singh", "city": "Delhi" },
            { "name": "Dr. Kiran Desai", "city": "Mumbai" },
            { "name": "Dr. Rahul Mittal", "city": "Chennai" }
        ]
    },
    "nasalInfections": {
        "symptoms": ["redness and swelling in the nose", "pain or pressure in the nasal area", "nasal discharge", "fever", "headache", "fatigue"],
        "medicines": ["Antibiotics (if bacterial infection)", "Pain relievers (acetaminophen, ibuprofen)", "Nasal saline irrigation", "Decongestants", "Rest and hydration"],
        "doctor": "ENT Specialist (Otolaryngologist)",
        "topDoctors": [
            { "name": "Dr. Sanjay Garg", "city": "Delhi" },
            { "name": "Dr. Preeti Gupta", "city": "Bangalore" },
            { "name": "Dr. Vikram Singh", "city": "Mumbai" }
        ]
    },

    "carpalTunnelSyndrome": {
        "symptoms": ["numbness", "tingling", "pain in the hand or wrist", "weakness in the hand"],
        "medicines": ["Pain relievers", "Anti-inflammatory drugs", "Wrist splints", "Surgery (in severe cases)"],
        "doctor": "Neurologist or Orthopedic Specialist",
        "topDoctors": [
            { "name": "Dr. Amit Agarwal", "city": "Delhi" },
            { "name": "Dr. R. K. Mishra", "city": "Mumbai" },
            { "name": "Dr. Neha Agarwal", "city": "Bangalore" }
        ]
    },
    "tendonInjury": {
        "symptoms": ["pain", "swelling", "weakness", "difficulty moving the affected finger or hand"],
        "medicines": ["Pain relievers", "Anti-inflammatory drugs", "Physical therapy", "Surgery (in severe cases)"],
        "doctor": "Orthopedic Specialist",
        "topDoctors": [
            { "name": "Dr. Sandeep Soni", "city": "Delhi" },
            { "name": "Dr. Vikram Sharma", "city": "Bangalore" },
            { "name": "Dr. Amit Verma", "city": "Chennai" }
        ]
    },
    "arthritis": {
        "symptoms": ["joint pain", "stiffness", "swelling", "reduced range of motion", "warmth in the joint"],
        "medicines": ["Pain relievers", "Anti-inflammatory drugs", "Disease-modifying antirheumatic drugs (DMARDs)", "Physical therapy"],
        "doctor": "Rheumatologist",
        "topDoctors": [
            { "name": "Dr. Meera Kapoor", "city": "Delhi" },
            { "name": "Dr. Amit Verma", "city": "Bangalore" },
            { "name": "Dr. R. K. Mishra", "city": "Mumbai" }
        ]
    },
 "cirrhosis": {
        "symptoms": ["fatigue", "weakness", "easy bruising", "swelling in the legs, ankles, or abdomen", "jaundice", "confusion", "nausea"],
        "medicines": ["Diuretics", "Lactulose", "Beta-blockers", "Liver transplant (in severe cases)", "Nutritional support"],
        "doctor": "Hepatologist",
        "topDoctors": [
            { "name": "Dr. P. S. Bansal", "city": "Delhi" },
            { "name": "Dr. Anil Sharma", "city": "Bangalore" },
            { "name": "Dr. Sunil Agarwal", "city": "Mumbai" }
        ]
    },
    "fattyLiverDisease": {
        "symptoms": ["fatigue", "pain or discomfort in the upper right abdomen", "unexplained weight loss", "jaundice", "swelling in the abdomen or legs"],
        "medicines": ["Lifestyle changes (diet and exercise)", "Medications for diabetes or high cholesterol", "Supportive care"],
        "doctor": "Hepatologist",
        "topDoctors": [
            { "name": "Dr. R. K. Mishra", "city": "Mumbai" },
            { "name": "Dr. Sanjay Gupta", "city": "Delhi" },
            { "name": "Dr. Meera Kapoor", "city": "Chennai" }
        ]
    },
    "liverCancer": {
        "symptoms": ["unexplained weight loss", "loss of appetite", "upper abdominal pain", "jaundice", "swelling of the abdomen", "nausea", "vomiting"],
        "medicines": ["Chemotherapy", "Radiation therapy", "Liver transplant", "Targeted therapy", "Immunotherapy"],
        "doctor": "Oncologist or Hepatologist",
        "topDoctors": [
            { "name": "Dr. Rajeev Rathi", "city": "Delhi" },
            { "name": "Dr. Sunil Agarwal", "city": "Mumbai" },
            { "name": "Dr. Vishal Mehta", "city": "Bangalore" }
        ]
    },
    "hemochromatosis": {
        "symptoms": ["fatigue", "joint pain", "abdominal pain", "unexplained weight loss", "skin discoloration", "heart problems", "liver enlargement"],
        "medicines": ["Phlebotomy (blood removal)", "Iron chelation therapy", "Supportive care"],
        "doctor": "Hematologist or Hepatologist",
        "topDoctors": [
            { "name": "Dr. Anjali Mehta", "city": "Delhi" },
            { "name": "Dr. Vikram Sharma", "city": "Mumbai" },
            { "name": "Dr. Sandeep Soni", "city": "Bangalore" }
        ]
    },
    "autoimmuneHepatitis": {
        "symptoms": ["fatigue", "abdominal discomfort", "joint pain", "jaundice", "dark urine", "pale stool"],
        "medicines": ["Immunosuppressive medications", "Steroids", "Liver transplant (in severe cases)"],
        "doctor": "Hepatologist",
        "topDoctors": [
            { "name": "Dr. Rajeev Rathi", "city": "Delhi" },
            { "name": "Dr. Sunil Agarwal", "city": "Mumbai" },
            { "name": "Dr. Pradeep Kumar", "city": "Chennai" }
        ]
    },
        "hepatitis": {
            symptoms: ["jaundice", "fatigue", "abdominal pain", "loss of appetite"],
            medicines: ["Antivirals", "Supportive care"],
            doctor: "Gastroenterologist",
            topDoctors: [
                { name: "Dr. Shalimar", city: "Delhi" },
                { name: "Dr. S. S. Bansal", city: "Delhi" },
                { name: "Dr. R. K. Khandelwal", city: "Delhi" }
            ]
        }

    };

    let foundDiseases = [];

    // Check for diseases based on input symptoms
    for (let disease in diseases) {
        let matchCount = 0;
        diseases[disease].symptoms.forEach(symptom => {
            if (symptomsArray.includes(symptom)) {
                matchCount++;
            }
        });

        // If at least one symptom matches, add disease to foundDiseases
        if (matchCount > 0) {
            foundDiseases.push({
                disease: disease,
                symptoms: diseases[disease].symptoms,
                medicines: diseases[disease].medicines,
                doctor: diseases[disease].doctor,
                topDoctors: diseases[disease].topDoctors
            });
        }
    }

    // Display results
    if (foundDiseases.length > 0) {
        let output = '';
        foundDiseases.forEach(item => {
            output += `<h3>${item.disease.charAt(0).toUpperCase() + item.disease.slice(1)}</h3>`;
            output += `<p><strong>Symptoms:</strong> ${item.symptoms.join(', ')}</p>`;
            output += `<p><strong>Suggested Medicines:</strong> ${item.medicines.join(', ')}</p>`;
            output += `<p><strong>Consult a Specialist:</strong> ${item.doctor}</p>`;
            output += `<p><strong>Top Doctors in India:</strong></p><ol>`;
            item.topDoctors.forEach(doctor => {
                output += `<li>${doctor.name} - ${doctor.city}</li>`;
            });
            output += `</ol>`;
        });
        resultDiv.innerHTML = output;
    } else {
        resultDiv.innerHTML = "<p>No matching diseases found. Please check the symptoms.</p>";
    }
});

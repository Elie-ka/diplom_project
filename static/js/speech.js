const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
/*`
` */
const hist = `On the 11th of February, 2021 the Moscow Technical University of Communications and Informatics (MTUCI) celebrated its
100th anniversary. Among dozens of thousands of its graduates, there are well- known scientists and specialists, 
outstanding state and public figures of Russia and many countries of Asia, Africa, Europe and Latin America. 
Today the MTUCI is the largest educational and scientific center for preparing and retraining of highly skilled 
specialists in the field of telecommunications, informatics, radio engineering, economics, and management. The structure of 
the University covers two regional branches in the cities of Rostov-on-the Don and Nizhniy Novgorod, Scientific Research Center, 
Advanced Telecommunications Training Center, College of Telecommunications, Pre- educational Preparatory Center, 
Scientific- Educational Range of New Techniques, Scientific Technical Library. Eight Training Centers on the preparation of Russian 
technical specialists created by the MTUCI together with the world leading telecommunications companies are functioning. On the MTUCI 
base, a really working Technopark formed by dozens of participants from various companies and organizations in telecommunications and 
 information technologies sphere was created. The University heads Educational- methodological Association on education in the field of 
 telecommunications, which consists of more than 80 higher educational institutions of Russia and CIS countries. The MTUCI teaching staff 
 is about 700 persons. Among them, there are over 100 professors and more than 400 candidates of sciences and senior lecturers. 
 Among professors of the University there are full and correspondent members of the Russian and international academies, 
 winners of Lenin and State prizes, prizes of the Government of the Russian Federation. About fourteen thousand students of the full 
 time and correspondence education, post-graduate students and attendees of various courses are studying at the University. 
  is carried out according to a modern multilevel educational system: the bachelor, the engineer, the master of 25 specialties and 8 directions.
Methods and means of training on the basis of the latest achievements in the field of telecommunications and information technologies are 
used in the MTUCI. The concept of "electronic university» allowing "to electronic" all processes of selection, admission, training, and 
testing of students is realized. Annually more than 1000 students and post-graduate students take part in scientific work in the field of 
innovative info-communication technologies on the base of the MTUCI Scientific Research Center
`;
const fac = `moscow technical university of communication and informatics has 5 faculties which are:
Information technology , Cybernetics and information security, Networks and systems , Radio and television and Digital economy and mass 
communications.

for having deeply informations follow the instructions.

    - for Information technology , say a;
    - Cybernetics and information security , say b;
    - Networks and communication systems , say c;
    - Radio and television, say d;
    - Digital economy and mass communications, say e;
`;
const fac_info_techno = `The Faculty of Information Technology trains professionals in priority areas in the IT field in 4 bachelor's degree programs (5 profiles), 
as well as in master's degree programs (3 master's programs).
There are 47 study groups at the faculty, which is more than 1000 students, of which: 945 people. on bachelor's degree programs, 75 people.
on master's degree programs.

The faculty consists of 6 departments:
    - "Mathematical Cybernetics and Information Technologies"
    - "Corporate information Systems"
    - "Network information technologies and services"
    - "Mathematical analysis"
    - "Informatics"
    - "Physical education"
    In addition, the faculty successfully operates:
    -Artificial Intelligence Center,
    -Educational laboratory of 3D modeling and prototyping,
    -1C Basic Training Center,
    -Mobile Application Development Laboratory.

    The teaching staff of the Faculty of Information Technology consists of 98 people, including 40 associate professors and 14 professors.
    Every year, the teachers of the Faculty of Information Technology conduct active publishing activities, participate in career guidance 
    events, city and international exhibitions, perform work under grants, manage the scientific work of students and graduate students of 
    the university, winning titles and prizes of authoritative profile competitions and competitions (such as "SMART GUY", "World Skills", 
    "Sprint Up", "Startup Diploma").
` ;
const fac_info_cyber = `The Faculty of Cybernetics and Information Security  trains professionals in priority areas in the field of intelligent 
cybersystems and information security in 5 areas of bachelor's degree and specialty training (7 profiles and 2 specializations) a
nd 3 areas of master's degree training (5 master's programs).

The faculty consists of 6 departments (4 of them are graduates), the Kaspersky Lab Training and Research Center, the Security Code 
Training Laboratory, the Huawei equipment network security Laboratory, the Cyberphysical Systems and Robotics Training and Research Center.

The teaching staff and students of the faculty are winners and laureates of numerous specialized competitions and Olympiads at the municipal
and federal levels, participants of the federal project "Information Security" of the national program "Digital Economy 
of the Russian Federation".

field of study:
    bachelor course,
    1 - Applied Mathematics : Profile "Applied Mathematics in information technology",
    2 - Information security : Profile "Computer system security", Profile "Security of automated systems"
    3 - Automation of technological processes and productions : Profile "Industrial Internet of Things and Robotics",
    4 - Management in technical systems : Profile "Information systems and technologies in management", Profile "Management in cyberphysical systems",
    specialty course,
    1 - Information security of telecommunication systems : Specialization "Security management of telecommunication systems and networks", Specialization "Information protection in radio communications and broadcasting"
    master course,
    1 - Information security : Computer System Security Program, 
    2 - Automation of technological processes and productions : The program "Artificial intelligence systems of the industrial Internet of Things",
        The program "Intelligent automated information management systems"
    3 - Management in technical systems : The program "Cyberphysical systems and the Internet of Things", 
        The program "Data mining in technical systems"

career life:
The faculty is annually included in the TOP-10 rating of faculties of Moscow universities for the direction of "Information Technology".
Our graduates annually visit with excursions, participate in conferences, competitions of the WRC, undergo practical training and get a job 
in leading domestic and foreign companies of the IT industry:
    - JSC "Voentelecom",
    - LLC "Security Code",
    - Kaspersky Lab OJSC,
    - 1C LLC,
    - PJSC Rostelecom,
    - Nokia and so on
` ;
const fac_info_network = `The Faculty of "Networks and Communication Systems"  was formed by the merger of two faculties ("Automatic Telecommunications"  
and "Multichannel Telecommunications") in 2004. The history of the creation of the faculty has been conducted since the foundation of 
the university, i.e. since 1921, when the training of specialists in the field of telephone and telegraph communications was started.
The mission of the SISS Faculty is to develop a professional environment for training personnel for the digital economy, based on the 
principle of involving students in the practical activities of industry companies under the guidance of leading employees of companies, 
university professors and scientists of research institutes.

The mission of the Networks and Communication Systems Faculty is to develop a professional environment for training personnel for the 
digital economy, based on the principle of involving students in the practical activities of industry companies under the guidance of 
leading employees of companies, university professors and scientists of research institutes.

The staff of the faculty as of 01.07.2021 includes 83 employees:
    The teaching staff consists of 10 professors, 21 associate professors, 11 senior teachers and 7 assistants. 
        - engineering and technical staff – 17 people;
        - training and support staff - 4 people.'

Structure of the Networks and Communication Systems Faculty:

    The faculty consists of 5 main departments:
    - Multichannel telecommunication systems ;
    - Guiding Telecommunication Environments ;
    - Communication networks and Switching systems ;
    - Metrology, standardization and measurement in infocommunications ;
    - General Theory of Communication .

    career life:
    - COMMUNICATIONS ENGINEER
`;
const fac_info_radio =`The Faculty of Radio and Television was formed as a result of the merger of the faculties of Radio Communications, Radio Broadcasting and 
Television and Radio Engineering in September 2005.

The training of radio engineers began at the Moscow Electrotechnical Institute of Communications from the moment the institute was opened 
(in 1921, the first recruitment for the radiotelegraphic specialty was conducted). The training at the faculty is conducted by a highly 
qualified teaching staff, which includes academicians, doctors of sciences, widely known both in our country and abroad. Many of them are
not only well-known scientists, but also developers of state standards, textbooks and teaching aids, according to which students study 
in more than 60 universities of the Russian Federation and CIS countries.

International training centers and laboratories established in MTUCI with leading foreign telecommunications companies such as Ericsson, 
Huawei Technologies, Nokia, AT&T, NEC, etc. are actively used for training.

Structure of the Faculty of RiT
    The faculty consists of 8 main departments:
    - Radio Engineering Systems ;
    - Radio equipment and circuitry ;
    - Electronics;
    - Television and Sound Broadcasting ;
    - Radio and television communication systems and networks ;
    - Theory of electric circuits ;
    - Physics;
    - Technical electrodynamics and Antennas .

    career life:
    - TELECOMMUNICATIONS ENGINEER;
    - TELEVISION EQUIPMENT ENGINEER;
    - SATELLITE COMMUNICATIONS ENGINEER.
` ; 
const fac_digital_economy = `The Faculty trains bachelors and masters in curricula reflecting current trends in the theory and practice of digital economy, management, 
business technologies, advertising, business informatics, taking into account the requirements of the federal state educational standards 
of higher education  for personnel training.

In 2021, the Faculty of Digital Economics and Mass Communications (formerly the Faculty of Economics and Management) celebrates its 90th 
anniversary. Over the years, the faculty has formed a professional staff of teachers, teaching traditions based on scientific research, 
trained more than 10 thousand specialists in the field of economics, advertising and public relations, foreign economic activity, applied 
computer science and electronic business.

The faculty has close ties with telecommunications and IT companies, which provides students with an effective internship and employment 
after graduation. Many graduates of the faculty are leading specialists and heads of information and communication companies and executive 
authorities of our country.

Bachelor's degree courses (duration of study 4 years):
    A professional retraining program in the direction of "Management" is integrated into the educational process of bachelor's degree 
    preparation, which will allow students to acquire additional knowledge and competencies in the field of management and, together with a 
    state diploma of higher education, receive a second diploma – a diploma of professional retraining in the direction of "Management".

    1 - Advertising and public relations : Profile: Advertising and public relations in the industry,
    2 - Economy : Profile: Economics and organization of IT business,
    3 - Business Informatics : Profile: Digital solutions for Business.
    
Directions of Master's degree preparation (duration of study 2 years):
Full-time students simultaneously master the Master of Business Administration - MBA program and receive two diplomas upon graduation.
    1 - Economy : Master's program: Digital Transformation of Business,

Graduates of the program have higher career prospects and can work in professions:
    - Head of innovative IT projects and programs in high-tech industries
    - Head and specialist of financial and economic services
    - Consultant for the development of innovative business
    - Expert in business development, sales and services

The program "Digital transformation of business" is focused on training specialists capable of:
    - To develop innovative business in the conditions of digitalization;
    - Manage Big-Data for analysis and planning of business development trends;
    - Build business models for managing both an existing business and a startup;
    - Manage business projects in the field of digital economy;
    - To model business processes in the conditions of digital transformation based on Data Science technology.

career life:
    - ICT business analyst;
    - Economist manager;
    - PR-manager.
`;
const greeting = ` Hello I'm I-N-E-R-T-I-A  your guider  , we thanks you for clicking in our voice assistant of the moscow technical university of communication and informatics.
we are going to guide you for all thing you want to know about our university.

for knowing about the university, his history , say one.
for knowing about the faculties ,says two.
for call out ,say four or end.
`;



const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('1') || message.includes('one')) {
        const finalText = hist;
        speech.text = finalText;
    }

    else if(message.includes('2') || message.includes('two')) {
        const finalText = fac;
        speech.text = finalText;
    }// a revoir
    else if(message.includes('end')){
        speech.text = "Launching you out of the orbit in 3...2...1"

        // Redirecting to homepage
        setTimeout( () => {
            window.location.replace('http://127.0.0.1:5000/')
        }, 4000)
    }

    else if(message.includes('a') || message.includes('hey')) {
        const finalText = fac_info_techno;
        speech.text = finalText;
    }

    else if(message.includes('b') || message.includes('be') || message.includes('bi')) {
        const finalText = fac_info_cyber;
        speech.text = finalText;
    }

    else if(message.includes('c') || message.includes('ci') || message.includes('si')) {
        const finalText = fac_info_network;
        speech.text = finalText;
    }

    else if(message.includes('d')) {
        const finalText = fac_info_radio;
        speech.text = finalText;
    }

    else if(message.includes('e')) {
        const finalText = fac_digital_economy;
        speech.text = finalText;
    }
    else if(message.includes('hello')){

    }
   

    else {
        const finalText = "I did not understand what you said please repeat again ";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;
    speech.lang = "en-IN" //mettre le son en anglais


    window.speechSynthesis.speak(speech);
}
interface StatObj{
    statsNum: number,
    context:string,
}

export const Stats:StatObj[] = [
    {
        statsNum:4,
        context: "Years of Experience"
    },
    {
        statsNum:24,
        context: "Completed Projects"
    },

]

interface InfoObj {
    label:string,
    text:string
}

export const Infos:InfoObj[] = [
    {
        label:"First Name",
        text: "Amr",
    },
    {
        label:"Address",
        text: "İstanbul / Türkiye",
    },
    {
        label:"Last Name",
        text: "Walidi",
    },
    {
        label:"Phone",
        text: "+90 536 992 29 50",
    },
    {
        label:"Age",
        text: "23 years",
    },
    {
        label:"Email",
        text: "amr.nawaf128@gmail.com",
    },
    {
        label:"Nationality",
        text: "Yemeni",
    },
    {
        label:"Languages",
        text: " English, Türkçe, العربية ",
    }
]

interface skillObj{
    percentage: number,
    name: string,
}

export const skills: skillObj[] = [
    {
        name:"HTML",
        percentage: 90
    },
    {
        name:"CSS",
        percentage: 70
    },{
        name:"JavaScript",
        percentage: 80
    },{
        name:"Java",
        percentage: 85
    },{
        name:"C",
        percentage: 80
    },{
        name:"Python",
        percentage: 70
    },
]

export interface ProjectsObj {
    title: string;
    summary: string;
    type: string;
    languages: string;
    URL: string;
    image: string
}

export const ProjectsDetails: ProjectsObj[] =[
    {
        title: "Blockchain Based Developer Scoring System",
        summary:"A website used for scoring stored developers by admins and saving their score in a secure blockchain. The website is created using React.js and firebase as a database to store information. The developer can see their score by entering its ID and check whether the info have been changed or not.",
        type: "Website",
        languages: "React.js, JavaScript, Firebase, CSS",
        URL: "https://github.com/AmrWalidi/developer-scoring-system",
        image: "./Blockchain.jpeg"
    }
    ,
    {
        title: "Football Trivia Challenge – Kotlin-Based Android Game (Fan Cup)",
        summary:"A dynamic football-themed quiz game developed in Kotlin for Android, combining both offline and multiplayer gameplay modes to engage football fans of all levels.",
        type: "Mobile app",
        languages: "Kotlin, Java, Firebase",
        URL: "https://github.com/AmrWalidi/fan-cup",
        image: "./FanCup.png"
    },
    {
        title: "Yemen Friendship and Cooperation Association Web Design",
        summary:"I worked in managing and designing the Yemen Friendship and Cooperation Association website using WordPress as platform. The website is for displaying the association achievements and projects to the visitor.",
        type: "Website",
        languages: "HTML, CSS, PHP",
        URL: "https://yemenddd.org/",
        image: "./yemenddd.png"
    },
    {
        title: "Turkish Sign Language Alphabet Detection System",
        summary:"A real-time Hand Detection and Alphabet Recognition app built with Flutter and powered by a Flask backend and machine learning model. The app captures hand images, detects the hand sign, and returns the predicted alphabet using a deep learning model trained on custom hand gesture data.",
        type: "Mobile app",
        languages: "Python, Flask , Convolutional Neural Networks (CNN), Flutter, TensorFlow",
        URL: "https://github.com/AmrWalidi/TSL-Alphabet-Detection",
        image: "./SignLanguage.jpg"
    },
    {
        title: "TrendMall",
        summary:"A full-featured e-commerce web application developed using JavaServer Faces (JSF) for the frontend, PostgreSQL as the relational database, and hosted on a GlassFish server. The project utilizes Java Persistence API (JPA) to manage data persistence and object-relational mapping efficiently.",
        type: "Website",
        languages: "Java, JavaServer Faces, PostgreSQL, JPA, XHTML, Glassfish",
        URL: "https://github.com/AmrWalidi/TrendMallJSF",
        image: "./TrendMall.jpg"
    },
    
    {
        title: "OnyxChef",
        summary:"An android app project that receives food orders from an API and manage them. The app displays the orders based on their status (new, delayed, changed and canceled). The app also show previous orders and some states on some food items.",
        type: "Mobile app",
        languages: "Kotlin, Java",
        URL: "https://github.com/AmrWalidi/OnyxChef",
        image: "./OnyxChef.jpg"
    }
]

document.addEventListener("DOMContentLoaded", () => {
    const terminal = document.getElementById("title-text")
    const lines = terminal.querySelectorAll("p")

    lines.forEach(line => line.style.display = "none")
    let index = 0;
    function printline()
    {
        if(index < lines.length)
        {
            lines[index].style.display = "block" ;

            let delay = (index <= 2) ? 1000 : 200;
            index++;
            setTimeout(printline,delay)
        }
        else
        {
            addprompt();
        }
    }
    function addprompt()
    {
        const prompt = document.createElement("div");
        prompt.className = "cmd-line"
        prompt.innerHTML = `dhanush<span class="host">@portfolio:-$</span><input type="text" class="cmd-input" autofocus />`;
        terminal.appendChild(prompt)

        const input =prompt.querySelector(".cmd-input");
        input.addEventListener("keydown",function(e){
            if(e.key == "Enter")
            {
                const command = input.value.trim();
                input.disabled = true;
                handlecommand(command);
            }
        })
       

        input.focus();
        
        
    }
    function handlecommand(cmd)
    {
        const response = document.createElement("div");
        response.className = "cmd-response"
        if (cmd == "help")
        {
            response.innerHTML = `<br>
            <p>Available commands:</p>
            <span class="help">help<br>about<br>education<br>internships<br>skills<br>certificates<br>projects<br>contact<br>
            </span>
            <span class="help1">Type 'command -d' for detailed description<br>Example:education -d </span>`
        }
        else if(cmd == "about")
        {
            response.innerHTML = `
            <span class="normal">> My name is Dhanush S.<br>  
            > Currently pursuing my B.Tech degree in Computer Science and Engineering at TKM Institute of Technology.<br>  
            > I have an interest in frontend development and strong coding skills.<br>  
            > Hardworking, adaptive, and a quick learner. </span> 
            `
        }
        else if(cmd == "about -d")
        {
             response.innerHTML = `
            <span class="normal">> Hello, I’m Dhanush S, a Computer Science and Engineering student at TKM Institute of Technology, Kollam.<br>  
            > I live in Anchal, Kollam, Kerala.<br>  

            > My academic journey has given me a strong base in programming and web technologies, and I especially enjoy frontend development where I can bring creativity and logic together.<br>  
            > I have good coding skills, and I enjoy solving problems efficiently while learning new tools and frameworks along the way.<br> 

            > I consider myself hardworking and adaptive, with the ability to adjust to challenges and new environments quickly. Being a fast learner helps me pick up technologies and concepts with ease, allowing me to contribute effectively to projects and team efforts.<br>  

            > In short, I’m passionate about growing as a developer, exploring opportunities in frontend and beyond, and applying my skills to build practical and impactful solutions.<br>  
         </span> 
            `
        }
        else if(cmd == "education")
        {
             response.innerHTML = `
            <span class="normal">B.Tech CSE | TKM Institute of Technology, Kollam | CGPA: 8.30<br>
            Class 12 (CBSE) | 90.5%<br>
            Class 10 (CBSE) | 90%<br>

         </span> `
        }
        else if(cmd == "education -d")
        {
             response.innerHTML = `
            <span class="normal">Bachelor of Technology in Computer Science and Engineering<br>
            - Institution: TKM Institute of Technology, Kollam<br>
            - CGPA: 8.30 (till current semester)<br><br>

            Senior Secondary (Class 12, CBSE)<br>
            - Year: 2022<br>
            - Percentage: 90.5%<br><br>

            Secondary (Class 10, CBSE)<br>
            - Year: 2020<br>
            - Percentage: 90%<br>


         </span> `
        }
        else if(cmd == "skills")
        {
             response.innerHTML = `
            <span class="normal">Technical Skills: Python, C, SQL, HTML, CSS, JavaScript, Kali Linux <br>
            Other Skills: Problem-Solving, Adaptability, Quick Learning, Time Management <br>


             </span> `
        }
        else if(cmd == "skills -d")
        {
             response.innerHTML = `
            <span class="underline">Technical Skills</span><br>
            <span class="normal">- Python → Applied in AI, ML, and automation projects with effective results <br>
            - C → Strong foundation in programming logic  <br>
            - SQL → Skilled in database queries and relational models <br>
            - HTML & CSS → Frontend design with responsive and structured layouts <br>
            - JavaScript → Interactive web development  <br>
            - Kali Linux → Basic cybersecurity and ethical hacking practices <br><br>
            <span class="underline">Other Skills</span><br>
            <span class="normal">- Problem-Solving → Ability to analyze challenges and implement efficient solutions <br>
            - Adaptability → Quick to adjust to new environments and technologies <br>
            - Quick Learning → Strong aptitude for grasping new tools and concepts rapidly <br>
            - Time Management → Balancing academic, project, and personal responsibilities effectively <br>
            </span> `
        }
        else if(cmd == "certificates")
        {
             response.innerHTML = `
            <span class="normal">Deep Learning – NPTEL <br>
            Cyber Security & Ethical Hacking – Techmaghi <br>
            Python – HackerRank <br>
            SQL – HackerRank <br>
            Nature & Properties of Materials – NPTEL <br>
            Advanced Machining Processes – NPTEL <br>
            </span> `
        }
        else if(cmd == "certificates -d")
        {
              response.innerHTML = `
            <span class="normal">Deep Learning – NPTEL (Apr 2025) <br>
            - Covered advanced neural networks, CNNs, and real-world AI applications <br>

            Cyber Security & Ethical Hacking – Techmaghi (Nov 2024) <br>
            - Learned penetration testing, system security, and vulnerability analysis <br>

            Python – HackerRank (Jul 2025) <br>
            - Validated coding proficiency and structured problem-solving in Python <br>

            SQL – HackerRank (Jul 2025) <br>
            - Demonstrated ability to write optimized queries and manage relational databases <br>

            Nature & Properties of Materials – NPTEL (Mar 2025) <br>
            - Gained insights into material behavior and their engineering applications <br>

            Advanced Machining Processes – NPTEL (Oct 2024) <br>
            - Learned about modern machining techniques and their industrial use cases <br>

            </span> `
        }
        else if(cmd == "internships")
        {
              response.innerHTML = `
              
            <span class="normal">
            AI & ML Internship – NextGenPro Innovations <br>

            </span> `
        }
        else if(cmd == "internships -d")
        {
              response.innerHTML = `
            <span class="underline">AI & ML Internship – NextGenPro Innovations (Jul 2024) </span><br>
            <span class="normal">
            - Worked on AI and ML model building, focusing on data preprocessing, training, and evaluation <br>
            - Applied practical knowledge in real-world problem-solving scenarios <br> <br>

            </span> `
        }
        else if(cmd == "projects")
        {
              response.innerHTML = `
            
            <span class="normal">
            1. CampusNav: Campus Navigation and Faculty Tracking Enhanced by AI <br>
            2. CMD-Style Portfolio Website <br>
            3. Smart Vehicle Rental System (SVRS) <br>
            4. Frontend Clones – Instagram & Facebook Login Pages <br>

            </span> `
        }
        else if(cmd == "projects -d")
        {
              response.innerHTML = `
            <span class="underline">CampusNav: Campus Navigation and Faculty Tracking Enhanced by AI  </span><br>
            <span class="normal">
            - AI-driven system designed for large campuses to simplify navigation and faculty tracking. <br>
            - Features an AI-powered interactive display with chatbot + indoor navigation, and a student mobile app with live bus tracking and faculty locator. <br>
            - Uses BLE beacons with biometric login for precise room-level detection, ensuring privacy with restricted zones and time-based control. <br>
            - Tech Stack: React Native, Node.js, BLE beacons, ESP32, GPS modules, OpenStreetMap API. <br>
             <span class="underline">CMD-Style Portfolio Website   </span><br>
            <span class="normal">
            - A personal interactive portfolio designed like a terminal interface. <br>
            - Allows visitors to explore skills, projects, certifications, and achievements through command-based interaction. <br>
            - Tech Stack: HTML, CSS, JavaScript. <br>
             <span class="underline">Smart Vehicle Rental System </span><br>
            <span class="normal">
            - A web-based rental platform with OpenStreetMap integration for route visualization and Open Meteo API for real-time weather prediction. <br>
            - Enables users to plan safe and convenient trips with map-based navigation and weather-aware route guidance. <br>
            - Tech Stack: Python, Flask, HTML, CSS, JavaScript, OpenStreetMap API, Open Meteo API. <br>
             <span class="underline">Frontend Clones – Instagram & Facebook Login Pages  </span><br>
            <span class="normal">
            - Developed frontend replicas of Instagram and Facebook login pages. <br>
            - Focused on UI/UX practice with attention to layout accuracy and styling. <br>
            - Tech Stack: HTML, CSS. <br>


            </span> `
        }
        else if(cmd == "contact" || cmd == "contact -d")
        {
            response.innerHTML = `
            
            <span class="normal">
            📧 Email: dkdhanush24@gmail.com <br>
            🔗 LinkedIn: linkedin.com/in/dhanush-s-tkmit/ <br>
            💻 GitHub: github.com/dkdhanush24 <br>
            📍 Location: Kollam, Kerala <br>


            </span> `
        }
        else
        {
            response.innerHTML = `
            
            <span class="normal">Wrong Command!(Check Spelling)</span>`
        }

        
         terminal.appendChild(response);
        addprompt();
    }
    printline();
})
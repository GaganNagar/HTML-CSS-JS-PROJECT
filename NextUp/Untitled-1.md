<!--
Beginner Level: Building the App's UI (Tasks 1-10)
Is level ka goal app ka poora UI structure JavaScript se banana hai.

Task 1: App ki Foundation Select karna

🎯 Goal: Us main div ko JavaScript mein target karna jiske andar humara poora app banega.

📝 Logic Socho: HTML mein jo app-root ID wala div hai, us tak JavaScript ke through pahuncho aur use ek variable mein store karlo taaki baar-baar na select karna pade.

👀 Expected Output: Page par koi change nahi. console.log() mein woh div element dikhega.

Task 2: Main App Container Banana

🎯 Goal: Ek div banana jo humari app ka main white background box hoga.

📝 Logic Socho: Memory mein ek naya div element taiyaar karo. Us element par app-container class lagao taaki CSS uspar apply ho sake.

👀 Expected Output: Page par koi change nahi. Element abhi sirf memory mein hai.

Task 3: Heading Banana

🎯 Goal: App ke liye "My To-Do List" heading banana.

📝 Logic Socho: Memory mein ek h1 element banao. Uske andar ka text set karo aur styling ke liye main-heading class add karo.

👀 Expected Output: Page par koi change nahi.

Task 4: Input Area Container Banana

🎯 Goal: Ek div banana jo input field aur "Add" button ko ek saath group karega.

📝 Logic Socho: Memory mein ek aur div element banao aur uspar input-area class lagao.

👀 Expected Output: Page par koi change nahi.

Task 5: Task Input Field Banana

🎯 Goal: Woh text box banana jismein user task type karega.

📝 Logic Socho: Memory mein ek input element banao. Usko zaroori attributes (jaise id, type, placeholder) do aur task-input class add karo.

👀 Expected Output: Page par koi change nahi.

Task 6: "Add" Button Banana

🎯 Goal: Woh button banana jispar click karke user task add karega.

📝 Logic Socho: Memory mein ek button element banao. Uske upar "Add" likho aur zaroori id aur class set karo.

👀 Expected Output: Page par koi change nahi.

Task <strong>Task 7: Task List ka Container Banana

🎯 Goal: Ek <ul> (list) banana jiske andar saare to-do items dikhenge.

📝 Logic Socho: Memory mein ek ul element banao aur usko id aur class do.

👀 Expected Output: Page par koi change nahi.

Task 8: Input Area ko Jodna (Assemble)

🎯 Goal: Input field aur button ko unke parent div (Task 4) ke andar rakhna.

📝 Logic Socho: Task 5 aur 6 mein banaye gaye elements ko Task 4 wale div ke "child" bana do.

👀 Expected Output: Page par koi change nahi. Humne sirf memory mein elements ko aapas mein joda hai.

Task 9: Main App Container ko Jodna

🎯 Goal: Saare alag-alag UI parts (heading, input area, list) ko ek main container (Task 2) mein ikattha karna.

📝 Logic Socho: Heading, input area, aur task list, teeno ko appContainer wale div ke child bana do, ek ke baad ek.

👀 Expected Output: Page par koi change nahi.

Task 10: App ko Page par Dikhana (Render)

🎯 Goal: Memory mein banaye poore app structure ko aakhirkar page par dikhana.

📝 Logic Socho: Poora taiyaar appContainer (jisme ab sab kuch hai) ko rootElement (Task 1) ka child bana do.

👀 Expected Output: Poori To-Do app ki UI (heading, input box, button) page par dikhne lagegi!

Medium Level: Adding Functionality (Tasks 11-20)
Is level ka goal UI ko interactive banana hai. Hum task add, delete aur complete karne ki functionality daalenge.

(Note: Task 19 ke liye, <style> tag ke andar yeh class add kar lein: .task-item.completed { text-decoration: line-through; color: #888; })

Task 11: Button Click ko Sunna

🎯 Goal: Pata lagana ki user ne "Add" button kab dabaya.

📝 Logic Socho: "Add" button ko JavaScript mein target karo aur uspar ek 'click' event detector lagao jo click hone par ek specific function chalaye.

👀 Expected Output: Jab bhi aap "Add" button click karein, console mein "Button clicked!" jaisa message aana chahiye.

Task 12: User ka Input Padhna

🎯 Goal: Jan'na ki user ne input box mein kya likha hai.

📝 Logic Socho: Jab button click ho, to us event ke function ke andar, input field ke andar jo bhi text hai, uski "value" ko access karo.

👀 Expected Output: Button click karne par, input box mein likha text console mein print hona chahiye.

Task 13: Naya Task Element Banana

🎯 Goal: User ke input se ek naya list item (<li>) taiyaar karna.

📝 Logic Socho: Button click hone par, memory mein ek naya li element banao. Uske andar ka text user ke input ke barabar set karo. Styling ke liye uspar task-item jaisi class add karo.

👀 Expected Output: Page par koi change nahi. Naya li element console.log() karne par object jaisa dikhega.

Task 14: Naye Task ko List mein Dikhana

🎯 Goal: Naye banaye task ko page par to-do list mein jodna.

📝 Logic Socho: Task 13 mein banaye gaye li element ko task-list waale ul ka child bana do.

👀 Expected Output: Input mein kuch likhkar "Add" button press karne par, woh text ek naye list item ke roop mein page par dikhne lagega.

Task 15: Input Box Saaf Karna

🎯 Goal: Task add hone ke baad input box ko automatically khaali karna.

📝 Logic Socho: Task ko list mein add karne ke theek baad, input field ki value ko ek khaali string ("") set kar do.

👀 Expected Output: "Add" button click karte hi task list mein judega aur input box clear ho jayega.

Task 16: Khaali Task ko Rokna

🎯 Goal: User ko khaali input ke saath task add karne se rokna.

📝 Logic Socho: Button click hone par, task banane ka code chalane se pehle, check karo ki input ki value kahin khaali to nahi hai. Agar hai, to function ko wahin rok do.

👀 Expected Output: Agar input box khaali hai, to "Add" button click karne par kuch nahi hona chahiye.

Task 17: Delete Button jodna

🎯 Goal: Har task ke saamne ek "Delete" button banana.

📝 Logic Socho: Jab aap naya li bana rahe ho (Task 13), usi samay memory mein ek button element bhi banao. Us button ko li ka child bana do, text ke saath.

👀 Expected Output: Har naya task jo list mein add hoga, uske saath ek "Delete" button bhi dikhega.

Task 18: Delete Button ko Chalana

🎯 Goal: Delete button par click karke us task (li) ko list se hatana.

📝 Logic Socho: Poori task-list (ul) par ek click event listener lagao. Jab click ho, to check karo ki click hui cheez "Delete" button hi hai. Agar haan, to us button ke parent (li element) ko DOM se remove kar do. (Hint: Event Delegation).

👀 Expected Output: Kisi bhi task ke "Delete" button par click karne se woh poora task list se gayab ho jaana chahiye.

Task 19: Task ko "Complete" Mark Karna

🎯 Goal: Kisi task item par click karke usko complete (line-through) mark karna.

📝 Logic Socho: Poori task-list (ul) par ek aur click listener lagao. Check karo ki user ne li element par click kiya hai (na ki delete button par). Agar haan, to us li par completed class ko toggle karo (lagao/hatao).

👀 Expected Output: Kisi task ke text par click karne se us par line aa jaani chahiye. Dobara click karne se line hat jaani chahiye.

Task 20: 'Enter' Key se Task Add Karna

🎯 Goal: User ko "Add" button ke alawa 'Enter' key press karke bhi task add karne dena.

📝 Logic Socho: Input field par 'keyup' event ke liye suno. Event ke function mein check karo ki user ne 'Enter' key dabai hai. Agar haan, to wahi kaam karo jo "Add" button click hone par hota hai.

👀 Expected Output: Input field mein task type karke 'Enter' press karne par task seedhe list mein add ho jaana chahiye. --> 

<!-- 
Hard Level: Advanced Features & Polish (Tasks 21-30)
Task 21: Task ko Edit Karna

🎯 Goal: User ko kisi bhi task par double-click karke use on-the-spot edit karne ki facility dena.

📝 Logic Socho: Poori ul list par 'dblclick' event ke liye suno. Agar user ne task-text waale span par double-click kiya hai, to us span ko hide karke uski jagah ek input field dikhao. Jab user 'Enter' dabaye ya us input field se bahar click kare (blur event), to input ki nayi value ko span ka text bana do aur input ko wapas hide kar do.

👀 Expected Output: Kisi task par double-click karne se woh text ek input box mein badal jaana chahiye. Naya text likhkar Enter press karne par task update ho jaana chahiye.`

Task 22: Task Counter Dikhana                               

🎯 Goal: User ko dikhana ki kitne tasks abhi "Active" (incomplete) hain.

📝 Logic Socho: App mein heading ke neeche ek naya element (jaise <p id="task-counter"></p>) add karo. Ek function banao (updateCounter()) jo list ke andar saare li elements ko ginta hai jinpar completed class nahi hai. Is function ko har baar call karo jab bhi koi task add, delete, ya complete/incomplete hota hai.

👀 Expected Output: App mein kahin par "Active Tasks: 3" jaisa counter dikhna chahiye, jo real-time mein update ho.

Task 23: Saare Completed Tasks ko Clear Karna
                            
🎯 Goal: Ek button add karna jispar click karke saare completed tasks ek saath delete ho jaayein.

📝 Logic Socho: UI mein "Clear Completed" button banao. Uske click event par, querySelectorAll ka use karke saare li elements select karo jinpar completed class lagi hui hai. Fir ek loop chala kar un sabhi elements ko ek-ek karke DOM se remove kar do.

👀 Expected Output: Button par click karte hi saare line-through waale tasks list se gayab ho jaane chahiye.

Task 24: Tasks ko Filter Karna (All, Active, Completed)

🎯 Goal: User ko teen options dena taaki woh sirf active, sirf completed, ya saare tasks dekh sake.

📝 Logic Socho: UI mein teen buttons ("All", "Active", "Completed") banao. Jab kisi button par click ho, to saare li elements par loop chalao. Button ke hisaab se har li ki style.display property ko flex (dikhane ke liye) ya none (chhipane ke liye) set karo. Jaise, agar "Active" par click hua hai, to sirf un li ko dikhao jinpar completed class nahi hai.

👀 Expected Output: Alag-alag filter buttons par click karne se task list filter ho jaani chahiye.

Task 25: Drag and Drop se Tasks Reorder Karna (Advanced)

🎯 Goal: User ko tasks ko drag karke upar-neeche reorder karne ki anumati dena.

📝 Logic Socho: Jab bhi naya li bane, uspar draggable="true" attribute set karo. Fir dragstart, dragover, aur drop events ka use karke drag-drop ki functionality implement karo. Jab user kisi task ko doosre task ke upar drop kare, to DOM mein uski position badal do. Yeh ek advanced topic hai, ispar research karke implement karein.

👀 Expected Output: User kisi bhi task ko mouse se pakad kar list mein kahin aur chhod kar uski position badal sakta hai.

Final Project Features (Tasks 26-30)
Yeh tasks bade hain aur inmein aapke seekhe hue lagbhag saare concepts use honge.

Task 26 (Comprehensive): Data ko Local Storage mein Save Karna

🎯 Goal: Tasks ko browser mein save karna taaki page reload karne par woh gayab na hon.

📝 Logic Socho: Ek saveData() function banao jo ulList ke saare li elements se data (text aur completion status) nikaal kar ek array of objects mein daale aur localStorage.setItem() ka use karke save kar de. Is function ko har action (add, delete, edit, complete) ke baad call karo. Ek loadData() function banao jo page load hote hi localStorage.getItem() se data nikaal kar wapas saare tasks ko UI mein bana de.

👀 Expected Output: App mein tasks add karne ke baad page ko refresh karne par bhi tasks wahin rehne chahiye.

Task 27 (Comprehensive): Search/Filter by Text

🎯 Goal: Ek search box add karna jisse user tasks ko unke naam se search kar sake.

📝 Logic Socho: Ek naya search input field banao. Us par 'keyup' event ke liye suno. Jab bhi user kuch type kare, to search input ki value le kar saare li elements par loop chalao. textContent.includes() method ka use karke check karo ki task ka text search text se match karta hai ya nahi. Jo match nahi karta, use style.display = 'none' kar do, aur jo match karta hai use style.display = 'flex' kar do.

👀 Expected Output: Search box mein type karte hi task list real-time mein filter ho jaani chahiye.

Task 28 (Comprehensive): Due Dates Add Karna

🎯 Goal: User ko har task ke liye ek due date set karne ka option dena.

📝 Logic Socho: Main input area mein ek <input type="date"> field add karo. Jab naya task li bane, to usmein date ko bhi ek span ya small tag mein store karke dikhao. Ek logic likho jo check kare ki kya task ki due date aaj ki date se pehle ki hai, aur agar hai to us task par overdue class add kar do (jiska style aap CSS mein red color de sakte hain).

👀 Expected Output: Har task ke neeche uski due date dikhni chahiye. Jo tasks overdue hain, woh alag color mein highlight hone chahiye.

Task 29 (Comprehensive): Delete Confirmation

🎯 Goal: Task delete karne se pehle user se "Are you sure?" puchna taaki galti se delete na ho.

📝 Logic Socho: Browser ki built-in confirm() popup ka use karo. Jab user "Delete" button par click kare, to li.remove() ko seedhe call mat karo. Pehle, if (confirm("Are you sure you want to delete this task?")) { ... } ke andar li.remove() ko rakho.

👀 Expected Output: Delete par click karne se ek confirmation popup aana chahiye. "OK" karne par hi task delete hoga.

Task 30 (Comprehensive): Final Polish and Refactoring

🎯 Goal: Code ko saaf karna aur chhoote-mote user experience (UX) improvements karna.

📝 Logic Socho:

Refactor: Dekho ki kya koi code hai jo baar-baar repeat ho raha hai. Jaise naya li banane ka code. Use ek alag function (createTaskElement()) mein daal do jo text aur date le kar poora li element return kare.

UX Improvement: Jab list khaali ho, to "No tasks yet! Add one above." jaisa message dikhao. Jab koi task add ho, to inputBox.focus() method se cursor ko wapas input field mein le aao taaki user turant agla task type kar sake.

👀 Expected Output: Aapka code zyada organized aur professional lagega, aur app use karne mein aur bhi smooth feel hogi. -->
var emailSectionEl = document.getElementById("emailSection");
var emailerEl = document.getElementById("email1");
var plusButtonEl = document.getElementById("plusButton");
var errorMsg1 = document.getElementById("errorMsg1");

var count = 1;
var border1 = "1px solid red";
var border2 = "1px solid green";

function onDeleteEmailContainer(emailContainerId){
    var emailContainerEl = document.getElementById(emailContainerId);
    console.log(emailContainerEl);
    emailSectionEl.removeChild(emailContainerEl);
}

plusButtonEl.onclick = function(){
    count += 1;
    if (count >10){
        return alert("Should not cross more than 10");
    }
    var emailContainerId = "emailContainer" + count; 
    var emailId = "email" + count;
    var paraId = "errorMsg" + count;

    var emailContainer = document.createElement("div");
    emailContainer.classList.add("email-container");
    emailContainer.id = emailContainerId;
    var emailBox = document.createElement("input");
    emailBox.classList.add("user-input");
    emailBox.setAttribute("type", "email");
    emailBox.id = emailId;
    emailBox.setAttribute("placeholder", "Email Address");

    var plusButton = document.createElement("button");
    plusButton.textContent = "+";
    plusButton.classList.add("button");

    var minusButton = document.createElement("button");
    minusButton.textContent = "-";
    minusButton.classList.add("button")

    var paraEl = document.createElement("p");
    paraEl.classList.add("error-msg");
    paraEl.id = paraId;

    emailContainer.append(emailBox, plusButton, minusButton, paraEl);
    emailSectionEl.appendChild(emailContainer);

    minusButton.onclick = function(){
        onDeleteEmailContainer(emailContainerId)
    };

    emailBox.onblur = function(){
        onValidateEmail(emailId,paraId)
    };
}

function validate(){
    var emailValue = emailerEl.value;
    var pattern = /^\w+([\.-]?\w+)*@\w+([-]?\w+)*\.\w{2,3}([\.]?\w{2,3})*$/;
    console.log(pattern.test(emailValue));
    
    if (emailValue ==''){
        errorMsg1.textContent = "Required*";
        emailerEl.style.border = border1;
    }
    else if(pattern.test(emailValue) !== true){
        errorMsg1.textContent = "Enter the valid Email Address";
        emailerEl.style.border = border1;
    }
    else {
        errorMsg1.textContent = "";
        emailerEl.style.border = border2;
    }
}

function onValidateEmail(emailId,paraId){
    var emailEl = document.getElementById(emailId);
    var paraEl = document.getElementById(paraId);
    var emailValue = emailEl.value;
    var pattern = /^\w+([\.-]?\w+)*@\w+([-]?\w+)*\.\w{2,3}([\.]?\w{2,3})*$/;
    console.log(pattern.test(emailValue));

    if (emailValue ==''){
        paraEl.textContent = "Required*";
        emailEl.style.border = border1;
    }
    else if(pattern.test(emailValue) !== true){
        paraEl.textContent = "Enter the valid Email Address";
        emailEl.style.border = border1;
    }
    else {
        paraEl.textContent = "";
        emailEl.style.border = border2;
    }
}


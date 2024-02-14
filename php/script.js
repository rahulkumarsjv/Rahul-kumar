function changebg() {
    var navbar = document.getElementById("navbar-container");
    var scrollvalue = window.scrollY;
    if(scrollvalue < 150) {
        navbar.classList.remove('bgColor');
    } else {
        navbar.classList.add('bgColor');
    }
}
window.addEventListener('scroll', changebg);
// function monthly() {
//     var monthly = document.getElementById("monthly");
//     monthly.style.backgroundColor="black";
//     monthly.style.borderRadius="30px";
//     monthly.style.width = "100px";
//     monthly.style.height = "40px"; 
// };
// function every() {
//     var every = document.getElementById("every");
//     every.style.backgroundColor="black";
//     every.style.borderRadius="30px";
//     every.style.width = "200px";
//     every.style.height = "40px"; 
// }
// function annually() {
//     var annually = document.getElementById("annually");
//     annually.style.backgroundColor="black";
//     annually.style.borderRadius="30px";
//     annually.style.width = "100px";
//     annually.style.height = "40px"; 
// }

// function monthly(e) {
//     const eid=e.target.id();
//     var rn= document.getElementById(eid)
//     rn.style.backgroundColor="black";
    
// }
function changeTab(tabId) {
    // Reset background color for all tabs
    var tabs = document.querySelectorAll('.Plan_tabName__D3vNM');
    tabs.forEach(function(tab) {
        tab.style.backgroundColor = '';
    });

    // Set background color for the clicked tab
    var clickedTab = document.getElementById(tabId);
    clickedTab.style.backgroundColor = 'black';
     clickedTab.style.color="#fff";
     clickedTab.style.fontSize="20px";
    // Call the corresponding function (monthly, every, annually)
    if (tabId === 'monthly') {
        monthly();
    } else if (tabId === 'every') {
        every();
    } else if (tabId === 'annually') {
        annually();
    }
}
function monthly() {
        var first = document.getElementById("frist");
        var seconds = document.getElementById("seconds");
        var third = document.getElementById("third");
        first.innerHTML="$0";
        seconds.innerHTML="$29.99";
        third.innerHTML="$49.99";
    }
function every() {
        var first = document.getElementById("frist");
        var seconds = document.getElementById("seconds");
        var third = document.getElementById("third");
        first.innerHTML="$0";
        seconds.innerHTML="$89.99";
        third.innerHTML="$149.99";
    }
    function annually() {
        var first = document.getElementById("frist");
        var seconds = document.getElementById("seconds");
        var third = document.getElementById("third");
        first.innerHTML="$0";
        seconds.innerHTML="$359.99";
        third.innerHTML="$599.99";
    }
    

window.onload = function(){

    var list = document.getElementById("available-items");
    var Items = new Array(10);
    var boughtItems = new Array(10);
    var boolin = false;
    var btn;
    var buyBtn;
    var moreBtn;
    var lessBtn;
    var dltBtn;
    var btn2;
    var buyBtn2;
    var moreBtn2;
    var lessBtn2;
    var dltBtn2;
    var bposition = 0;
    //english version of list
    var ItemList = ["The Alchemist", 
                     "Outliers", 
                     "Lovely Bones", 
                     "To Kill a Mockingbird",
                     "Holy Bible", 
                     "The Fault in Our Stars", 
                     "1984", 
                     "Cinderella", 
                     "Sleeping Beauty", 
                     "Great Expectations" ];
    //french version of list
    var frnchList = ["L'achimiste", 
                     "Valeurs Aberrantes", 
                     "Jolis Os", 
                     "Tuer un Oiseau Moqueur", 
                     "Sainte Bible", 
                     "La Faute dans nos Etoiles", 
                     "1984", 
                     "Cendrillon", 
                     "La Belle au Bois Dormant", 
                     "De Grandes Attentes"];
    //item pictures
    var ItemPics = ["alchemist.jpg", 
                     "outliers.jpg", 
                     "lovelybones.jpg", 
                     "tokill.jpg", 
                     "holybibe.jpg", 
                     "fault.jpg", 
                     "1984.jpg", 
                     "cinderella.jpg", 
                     "sleepingbeauty.jpg", 
                     "great.jpg"];
    //rental period of each item
    var Days = [30, 30, 30, 30, 30, 30, 30, 30, 30, 10];
    var body = document.getElementById("body");
    var basket = document.getElementById("basket");
    var head1 = document.getElementById("head1");
    var select = document.createElement("select");
    var option1 = document.createElement("option");

    //English or French option
    var en = document.createTextNode("English");
    option1.appendChild(en);
    option1.id = "en";
    var option2 = document.createElement("option");
    var fr = document.createTextNode("French");
    option2.appendChild(fr);
    option2.id = "fr";
    
    body.insertBefore(select, body.childNodes[0]);
    select.appendChild(option1);
    select.appendChild(option2);
    select.addEventListener("change", langSwitch);

   document.getElementById("newshi").hidden = true;
    document.getElementById("birth-year").addEventListener('change',loginValidation);
    document.getElementById("mail").addEventListener('change',ValidateEmail);
    document.getElementById("birth-year").addEventListener('change',replaceName);
    document.getElementById("birth-year").addEventListener('change',managementTings);
    document.getElementById("newshi").addEventListener('change',managerAdd);
    //Displaying the Items
    
    for(var i = 0; i < 10; i++)
    {
        //definition of an item
        Items[i] = {
            name : ItemList[i],
            picture : ItemPics[i],
            quantity : 1,
            rentalperiod : Days[i],
        };
        boughtItems[i] = 0;
        var newSpot = document.createElement("li");
        var pics = document.createElement("img");
        pics.src = Items[i].picture;
        var text = document.createTextNode(Items[i].name);//sets text as item name
        btn = document.createElement("BUTTON");//creates a button for adding
        moreBtn = document.createElement("BUTTON");
        moreBtn.id = i;
        lessBtn = document.createElement("BUTTON");
        lessBtn.id = i;
        
        var bt = document.createTextNode("Add");
        var inc = document.createTextNode("+");//increment button
        var dec = document.createTextNode("-");//decrement button 
        var input = document.createElement('input');
        input.type = "text";
        input.id = Items[i].name;
        input.value = 1;
        btn.id = i;
        btn.addEventListener("click", addButton);
        moreBtn.addEventListener("click", incrementQuantity);
        lessBtn.addEventListener("click", decrementQuantity);
        
        btn.appendChild(bt);
        moreBtn.appendChild(inc);
        lessBtn.appendChild(dec);
        newSpot.appendChild(text);
        list.appendChild(newSpot);
        list.appendChild(pics);
        list.appendChild(btn);
        list.appendChild(input);
        list.appendChild(moreBtn);
        list.appendChild(lessBtn);
        
    }
    
    //LOGIN VALIDATION

    function loginValidation(){
        var blister = document.getElementById('birth-year').value;
        if (isNaN(blister) || blister < 1900 || blister > 2019) {
            alert("Input not valid");
          } else {
            alert("Input OK");
          }
        }

    function ValidateEmail()
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById('mail').value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

    function replaceName(){
        var cde = document.getElementById("birth-year").value;
    var abc = document.getElementById("name").value;
        document.getElementById("name").hidden = true;
        document.getElementById("birth-year").hidden = true;
        document.getElementById("mail").hidden = true;
  var para = document.createElement("p");
var node = document.createTextNode("User: " + abc);
if (2019-cde > 18)
{
    var node2 = document.createTextNode(" [Adult]");
}
else{
    var node2 = document.createTextNode(" [child]");
}
para.appendChild(node);
para.appendChild(node2);
var element = document.getElementById("div1");
element.appendChild(para);
return false;
    }

    function managementTings(){
        var ya = document.getElementById("name").value;
        var yadig = document.getElementById("birth-year").value;
        if (ya == "admin" && yadig == "1867"){
            document.getElementById("newshi").hidden = false;
//add
var lets = document.createElement("p");
var yo = document.createTextNode("");
lets.appendChild(yo);
var yeo = document.getElementById("body");
yeo.appendChild(lets);

//button to logout
btn11 = document.createElement("BUTTON");
var bt11 = document.createTextNode("GTFO");
btn11.addEventListener("click",logout);
btn11.appendChild(bt11);
list.appendChild(btn11);
//
        }
    }
        function managerAdd(){
var newSpot2 = document.createElement("li");
var text3 = document.getElementById("newshi").value;
Items[11] = {
    name : text3,
    picture : ItemPics[10],
    quantity : 1,
    rentalperiod : Days[10],
};
        var text2 = document.createTextNode(Items[11].name);//sets text as item name
        btn2 = document.createElement("BUTTON");//creates a button for adding
        moreBtn2 = document.createElement("BUTTON");
        moreBtn2.id = 11;
        lessBtn2 = document.createElement("BUTTON");
        lessBtn2.id = 11;
        var bt2 = document.createTextNode("Add");
        var inc2 = document.createTextNode("+");//increment button
        var dec2 = document.createTextNode("-");//decrement button 
        var input2 = document.createElement('input');
        input2.type = "text";
        input2.id = Items[11].name;
        input2.value = 11;
        btn2.id = 11;
        btn2.addEventListener("click", addButton);
        moreBtn2.addEventListener("click", incrementQuantity);
        lessBtn2.addEventListener("click", decrementQuantity);
        
        btn2.appendChild(bt2);
        moreBtn2.appendChild(inc2);
        lessBtn2.appendChild(dec2);
        newSpot2.appendChild(text2);
        list.appendChild(newSpot2);
        list.appendChild(btn2);
        list.appendChild(input2);
        list.appendChild(moreBtn2);
        list.appendChild(lessBtn2);
    }
    function logout(){
        document.getElementById("newshi").hidden = true;
    }
    function addButton(){
        var q = document.getElementById(Items[this.id].name);

        if(q.value > Items[this.id].quantity)
        {
            alert("Sorry we don't have that many");
            //if(Fruit[this.id].quantity == 0)
                //list.insertBefore(document.createTextNode("OUT OF STOCK!"), list.childNodes[this.id]);
        }
        else
        {
            var basket = document.getElementById("basket");
            //return date
            var rentalperiod = Days[this.id];
            var someDate = new Date();
            someDate.setDate(someDate.getDate() + rentalperiod);
            //formatting
            var dd = someDate.getDate();
            var mm = someDate.getMonth() + 1;
            var y = someDate.getFullYear();

            var someFormattedDate = dd + '/'+ mm + '/'+ y;
            for(var i = 0; i < q.value; i++)//calculates checkout price 
            {
                //return date
                var rentalperiod = Days[i];
                var someDate = new Date();
                someDate.setDate(someDate.getDate() + rentalperiod);
                //formatting
                var dd = someDate.getDate();
                var mm = someDate.getMonth() + 1;
                var y = someDate.getFullYear();
                var someFormattedDate = dd + '/'+ mm + '/'+ y;
                var newItem = document.createElement("li");
                var output = document.createTextNode(Items[this.id].name + " | Return Date: " + someFormattedDate)
                
                dltBtn = document.createElement("BUTTON");
                dltBtn.id = bposition;
                var text = document.createTextNode("Delete");
                dltBtn.appendChild(text);
                newItem.appendChild(output);
                newItem.appendChild(dltBtn);
                newItem.id = "item" + bposition;
                dltBtn.addEventListener("click", deleteItem);
                basket.appendChild(newItem);
                bposition++;//position in the basket
            }
            Items[this.id].quantity -= q.value;
            boughtItems[this.id] += q.value;
        }
    }

    function incrementQuantity(){
        var q = document.getElementById(Items[this.id].name);
        if(q.value >= Items[this.id].quantity)
            return;
        else
            q.value++;
    }

    function decrementQuantity(){
        var q = document.getElementById(Items[this.id].name);
        if(q.value == 1)
            return;
        else
            q.value--;

    }

    function deleteItem(){
        var basket = document.getElementById("basket");
        if(basket.childNodes[this.id] == null)
            basket.removeChild(basket.lastChild);
        else
            basket.removeChild(basket.childNodes[this.id]);
    
        bposition--;
    }

    function buyButton(){
        var buy = confirm("Would you like to proceed?" );
        if(buy){
            while (basket.firstChild) {
                basket.removeChild(basket.firstChild);
            }
        }

        for(var i = 0; i < boughtItems.length; i++){
            boughtItems[i] = 0;
        }
    }

    function cnclButton(){
        var c = confirm("Are you sure?");
        if(c){
            while (basket.firstChild) {
                basket.removeChild(basket.firstChild);
            }
        }
        reset();
        

    }

    function reset(){
        var sum;
        for(var j = 0; j < boughtItems.length; j++){
            sum = Number(Items[j].quantity) + Number(boughtItems[j]);
            Items[j].quantity = sum;
            boughtItems[j] = 0;
        }
    }

    function langSwitch(){
        var option = select.selectedIndex;
        switch (option){
            case 0:
                var lList = document.querySelectorAll("#available-items li");
                for(var i = 0; i < 10; i++)
                {
                    lList[i].innerHTML = ItemList[i];
                    Items[i].name = ItemList[i];
                }
                break;
            case 1:
                var lList = document.querySelectorAll("#available-items li");
                for(var i = 0; i < 10; i++)
                {
                    lList[i].innerHTML = frnchList[i];//changes all item names to french
                }
        }
    }
/*
    //LOGIN VALIDATION

    //validate name
    var name = document.getElementbyId('name');
    name.addEventListener("text", function (event) {
        if (name.validity.tooLong) {
            name.setCustomValidity("Too many characters, darling");
        } 
        else{
            name.setCustomValidity("");
        }
     });

     //validate email
     var email = document.getElementbyId('mail');
     email.addEventListener("input", function (event) {
        if (email.validity.typeMismatch) {
            email.setCustomValidity("I expect an e-mail, darling!");
        } 
        else{
            email.setCustomValidity("");
        }
     });
            
    //validate birth yr
    var byr = document.getElementbyId('birth-year');
    byr.addEventListener("text", function (event) {
        if (byr.validity.stepMismatch) {
            byr.setCustomValidity("Are you from the future or over 120 years old? Try again.");
        } 
        else{
            byr.setCustomValidity("");
        }
     });

    
    function closeButton(){
        var modal = document.getElementById('modal');
        modal.style.display = "none";
        var mod = document.getElementById('mod');
        while (mod.firstChild) {
            mod.removeChild(mod.firstChild);
        }

    }

/*
    document.getElementById("birth-year").addEventListener('change', eraseCustomerInfo());

    function eraseCustomerInfo(){
        document.getElementById("myForm").style.visibility = "hidden"
    }
    */

   
}

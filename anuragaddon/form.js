var hd =document.getElementById("hd");
var hdf =document.getElementById("hdf");
var hdfg =document.getElementById("hdfg");

function validate()
{
    if(hd.value.trim()==""||hdf.value.trim()=="") 
        {
            alert("field cannot be empty");
            hd.style.border='2px solid red';
            hdf.style.border='2px solid red';
            return false
        }
        else if(hdf.value.length<5)
        {
            alert("Password length should be more than 5");
            return false;
        }
        else
        {
            return true
        }
}
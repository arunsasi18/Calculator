function clickNum(cl){
    document.getElementById("screenDisplay").value+=cl
}
function clearnum(){
    document.getElementById("screenDisplay").value=("")
}
function clickEqual(){
    var text=document.getElementById("screenDisplay").value
    var result=eval(text)
    document.getElementById("screenDisplay").value=result

}
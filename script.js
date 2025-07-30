function goTo()
{
    let total=0;
    const credits=[4,1,3,3,3,4,1.5,1.5,0,1];

    for(let i=0;i<10;i++)
    {
        const value=parseInt(document.getElementById(`s${i+1}`).value);

        if(!isNaN(value))
        {
            total+=(value*credits[i]);
        }
    }
    const result=parseFloat(total/22);
   localStorage.setItem("cgpa",result.toFixed(2));
   alert(result.toFixed(2));
   window.location.href="result.html";
   
}
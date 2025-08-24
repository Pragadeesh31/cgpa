function goTo()
{
    const username=document.getElementById("name").value;
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
    let disp=`Congratulations ${username} you got ${result}`
    document.getElementById("cgpaDisplay").textContent= disp;


}

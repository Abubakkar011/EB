function checker() {
    user=document.getElementById('Username1').value;
    pwd=0
    pwd=document.getElementById('Password1').value;
    if( document.getElementById('success').style.display=='block'){
        document.getElementById('success').style.display='none'
    }
    if( document.getElementById('alert').style.display=='block'){
        document.getElementById('alert').style.display='none'
    }
    if(user=='0001'){
            document.getElementById('success').style.display='block'
    }
    else if((user=='admin') && (pwd=='electricity')){
            window.location.href='Index.html';
            document.getElementById('Username1').value=null
            document.getElementById('Password1').value=null
    }
    else if((user!='admin') || (pwd!='electricity')){
            document.getElementById('alert').style.display='block'
    }
}

function switches(clicked_id){
    if(clicked_id=='btnradio1'){
        document.getElementById('2').style.display='none'
        document.getElementById('Password1').value=null
    }
    else if (clicked_id=='btnradio2'){
        document.getElementById('2').style.display='block'
    }
}

function close(){
    document.getElementById('alert').style.display='none'
    document.getElementById('Username1').value='abc'
    if(id=='iup'){
        
    }
    if(id=='scs'){
        document.getElementById('success').style.display='none'
    }
}
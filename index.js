// Add your code here
const submitData = (username,useremail)=>{
	return fetch('http://localhost:3000/users',{
		 method:'POST',
		 headers:{
			 'content-Type':'application/json',
			 Accept:'application/json'
		 },
		 body:JSON.stringify({
			 name:username,
			 email:useremail
		 })
	 })
	 .then((response)=>response.json())
	 .then((data)=>{
		 let body = document.querySelector('body')
		 body.innerHTML = data.id
	  console.log(data)
	 })
	 .catch(()=>{
		 document.querySelector('body').innerHTML = 'Unauthorized Access'
	 })
  } 
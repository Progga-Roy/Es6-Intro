document.getElementById('btn').addEventListener('click',function(){

const friends= document.getElementsByClassName('friend')
for (const friend of friends) {
    friend.style.backgroundColor = 'lightGreen';
    friend.style.padding = '8px 10px';
    friend.style.border = '2px solid black';
}
})


document.getElementById('btn-2').addEventListener('click',function(){
const friends = document.getElementById('third-item');

friends.style.textAlign = 'center';
friends.style.backgroundColor = 'lightBlue';
})

document.getElementById('btn-3').addEventListener('click',function(){
    const sectionContainer = document.getElementById('section')
const div = document.createElement('div')
div.classList.add('friend');
div.innerHTML = ` <div class="friend">
<h3 class="name">Friend-5</h3>
<p>Lorem ipsum dolor sit amet.</p>
</div>`

sectionContainer.appendChild(div);

})

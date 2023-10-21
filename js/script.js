function searchCar() {

    const input = document.getElementById('filter').value.toUpperCase();

    const cardContainer = document.getElementById('products1');
    console.log(cardContainer);

    const cards = cardContainer.getElementsByClassName('container');
    console.log(cards)


    for(let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector(".container .info-inner span.p-name ");
        console.log(title)

        if(title.innerText.toUpperCase().indexOf(input) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }

}

/*--------------------------------------------------*/
window.addEventListener('load', ()=>{
    let allTab = document.querySelectorAll('.catg-btns');
    let allProject = document.querySelectorAll('.container');

    const removeActive=()=> allTab.forEach(tab=>{
        tab.classList.remove('tab-active')
    })
    allTab.forEach(tab=>{
        tab.addEventListener('click', (event)=>{
            removeActive();
            tab.classList.add('tab-active')

            let fillterName = event.target.getAttribute('data-name');

            allProject.forEach(project=>{
                let projectName = project.getAttribute('data-name')
                if((projectName == fillterName) || fillterName == 'All'){
                    project.style.display = '';
                }else{
                    project.style.display = 'none';
                }
            })
        });
    })
});








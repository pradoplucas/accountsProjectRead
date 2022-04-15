let fieldState0 = document.getElementsByClassName('fieldState0'),
    fieldState1 = document.getElementsByClassName('fieldState1')

function toggleAccumulated(isChecked){
    if(isChecked){
        document.getElementById('iconToggleAccumulated').classList.remove('fa-eye')
        document.getElementById('iconToggleAccumulated').classList.add('fa-eye-slash')
        
        for(oneShow of fieldState0){
            oneShow.classList.remove('d-none')
        }

        for(oneHide of fieldState1){
            oneHide.classList.add('d-none')
        }
    }
    else{
        document.getElementById('iconToggleAccumulated').classList.remove('fa-eye-slash')
        document.getElementById('iconToggleAccumulated').classList.add('fa-eye')
        
        for(oneHide of fieldState0){
            oneHide.classList.add('d-none')
        }

        for(oneShow of fieldState1){
            oneShow.classList.remove('d-none')
        }
    }
}

function toggleColor(isChecked){
    let all = document.getElementsByClassName('toggle-color')
        allBtn = document.getElementsByClassName('toggle-btn')

    if(isChecked){
        allBtn[0].classList.replace('btn-outline-light', 'btn-outline-dark')
        allBtn[1].classList.replace('btn-outline-light', 'btn-outline-dark')

        for(one of all){
            one.classList.replace('dark', 'light')
        }
    }
    else{
        allBtn[0].classList.replace('btn-outline-dark', 'btn-outline-light')
        allBtn[1].classList.replace('btn-outline-dark', 'btn-outline-light')

        for(one of all){
            one.classList.replace('light', 'dark')
        }
        

    }
}
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
function getUserLocation(){
    const userLocation = document.querySelector('input');

    const location = userLocation.value.trim();
    userLocation.value = '';
    return location
}

export {getUserLocation};
$('#NavBar').load('/parts/mainParts/navbar.html')
$('#Footer').load('/parts/mainParts/footer.html')
$('#carouselHomePageHeader').load('/parts/homePage/carouselHomePageHeader.html')
    /* $('#cardsHomePage').load('/parts/homePage/cardsHomePage.html') */
$('#industries').load('/parts/homePage/industries.html')
$('#headerAboutPage').load('/parts/aboutPage/headerAboutPage.html')
$('#ourStoryAboutPage').load('/parts/aboutPage/ourStoryAboutPage.html')
$('#missionVisionAboutPage').load('/parts/aboutPage/missionVisionAboutPage.html')
$('#ourPartnersAboutPage').load('/parts/aboutPage/ourPartnersAboutPage.html')
$('#headerCustomerPage').load('/parts/customerPage/headerCustomerPage.html')
$('#ourCustomersCustomerPage').load('/parts/customerPage/ourCustomersCustomerPage.html')
$('#headerProductPage').load('/parts/productsPage/headerProductPage.html')

$('#headerServicesPage').load('/parts/servicePage/headerServicesPage.html')
$('#ourServices').load('/parts/servicePage/ourServices.html')

$('#productProductsPage').load('/parts/productsPage/productProductsPage.html', function() {
    $('#s7300').load('/parts/productsPage/productsDetails/s7300.html')
    $('#s7400').load('/parts/productsPage/productsDetails/s7400.html')
    $('#s71200').load('/parts/productsPage/productsDetails/s71200.html')
    $('#s71500').load('/parts/productsPage/productsDetails/s71500.html')
    $('#SIMATIC-HMI').load('/parts/productsPage/productsDetails/SIMATIC-HMI.html')
    $('#MICROMASTER').load('/parts/productsPage/productsDetails/MICROMASTER.html')
    $('#SINAMICSDrives').load('/parts/productsPage/productsDetails/SINAMICSDrives.html')
    $('#Modicon-M100').load('/parts/productsPage/productsDetails/Modicon-M100.html')
    $('#Modicon-M200').load('/parts/productsPage/productsDetails/Modicon-M200.html')
    $('#Modicon-M221').load('/parts/productsPage/productsDetails/Modicon-M221.html')
    $('#Modicon-M340').load('/parts/productsPage/productsDetails/Modicon-M340.html')
    $('#Modicon-M580').load('/parts/productsPage/productsDetails/Modicon-M580.html')
    $('#Magelis-HMI').load('/parts/productsPage/productsDetails/Magelis-HMI.html')
    $('#ATV-drive').load('/parts/productsPage/productsDetails/ATV-drive.html')
    $('#Soft-Starter').load('/parts/productsPage/productsDetails/Soft-Starter.html')
    $('#Unidrive-M-series').load('/parts/productsPage/productsDetails/Unidrive-M-series.html')
    $('#commander-c-drive-series').load('/parts/productsPage/productsDetails/commander-c-drive-series.html')
    $('#MP-series').load('/parts/productsPage/productsDetails/MP-series.html')
})
$('#headerRobotsPage').load('/parts/robotsPage/headerRobotsPage.html', function() {
    $('#contentRobotsPage').load('/parts/robotsPage/contentRobotsPage.html')
})
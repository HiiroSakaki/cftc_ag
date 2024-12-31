document.getElementById("template-navbar").innerHTML = `
<!-- Header -->
<header class="w3-display-container w3-content w3-center" style="max-width:1500px">
  <img class="w3-image" src="/static/logo-cftc-csfv.jpg" alt="CFTC Logo" width="900" height="400">

  <!-- Navbar (placed at the bottom of the header image) -->
  <div class="w3-bar w3-light-grey w3-round w3-display-bottommiddle w3-hide-small" style="bottom:-16px">
    <a href="index.html" class="w3-bar-item w3-button">Liste des années</a>
    <a href="2024.html" class="w3-bar-item w3-button">2024</a>
    <a href="2025.html" class="w3-bar-item w3-button">2025</a>
  </div>
</header>
`;

document.getElementById("template-navbar-small").innerHTML = `
<!-- Navbar on small screens -->
<div class="w3-center w3-light-grey w3-padding-16 w3-hide-large w3-hide-medium">
    <div class="w3-bar w3-light-grey">
        <a href="#" class="w3-bar-item w3-button">Liste des années</a>
        <a href="2024.html" class="w3-bar-item w3-button">2024</a>
        <a href="2025.html" class="w3-bar-item w3-button">2025</a>
    </div>
</div>
`
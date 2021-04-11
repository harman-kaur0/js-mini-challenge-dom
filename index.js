/***** Deliverable 1 *****/
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("#header");
  console.log("Here's your header:", header);
  /***** Deliverable 2 *****/
  header.style.color = "red";
  /***** Deliverable 3 *****/
  console.log("the player object looks like this:", player);
  const h2 = document.querySelector("h2");
  const em = document.querySelector("em");
  const h4 = document.querySelector("h4");
  const img = document.querySelector("img");
  const ul = document.querySelector("#goals");

  h2.innerText = player["name"];
  em.innerText = player["nickname"];
  img.src = player["photo"];
  img.alt = player["name"];
  player["goals"].forEach(function (data) {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const a = document.createElement("a");
    li.setAttribute("data-id", data["id"]);
    p.innerText = data["description"];
    a.href = data["link"];
    a.innerText = data["link"];
    a.target = "_blank";

    ul.appendChild(li);
    li.appendChild(p);
    li.appendChild(a);
  });
  const ids = document.querySelector("[data-id = '3']");
  ids.remove();
});

/***** Deliverable 4 *****/

/***** Deliverable 5 *****/

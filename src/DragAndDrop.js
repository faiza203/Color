export const dragStart = (e) => {
  e.dataTransfer.setData("card-id", e.target.id);
  setTimeout(() => {
    e.target.style.display = "none";
  }, 0);
};

export const dragOver = (e) => {
  e.stopPropagation();
};

export const dropStart = (e) => {
  e.preventDefault();
  const card_id = e.dataTransfer.getData("card_id");
  const card = document.getElementsByClassName(card_id);
  card.style.display = "block";
  e.target.appendChild(card);
};

export const dropOver = (e) => {
  e.preventDefault();
};

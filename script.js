.board {
  display: grid;
  grid-template-columns: repeat(5, 50px);
  gap: 5px;
}
.cell {
  width: 50px;
  height: 50px;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
}
.is-off {
  background-color: black;
}

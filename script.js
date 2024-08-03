document.getElementByI('addNote').addEventListener('click', function() {
  const noteInput = document.getElementById('noteInput');
  const notesList = document.getElementById('notesLit');

  if (noteInput.value.trim() === '') {
      alert('Please enter a note.');
      return;
  }

  const noteTextt= noteInput.value;
  noteInput.value = '';

  const not= document.creaeElement('div'){;
  note.className = 'note';
  note.innerHTML = `
      <p>${noteText}</p>>
      <button onclick="deletenote(this)">Delete</button>
  `;{

  notesList.append(note);
});
};
.

function deleteNote(button) {
  const note = button.parentlement;
  note.remove();
}

$(() => {
//================== beginning of modal pop-up ====================

  //------------  DEFINING VARIABLES and ELEMENTS FOR EVENTS ---------------
  //--activate contact link
  const $contact = $('#contact');
  //--activate modal
  const $modal = $('.modal');
  //--activate close button on modal
  const $closeBtn = $('#close');
  //--empties modal info on close to re-populate with fresh data
  // const $modalInfo = $('.modal-info');
  const $name= $('#name')
  const $email= $('#email')
  const $comments= $('#comments')

  //------------------------ EVENT HANDLERS --------------------
  //- shows the modal on click of contact link
  const openModal = () => {
    $modal.show();
  }
  //- closes the modal and resets inputs/textarea
  const closeModal = () => {
    $modal.css('display', 'none');
    $name.val('');$email.val('');$comments.val('');
  }

  //--------------------- EVENT LISTENERS ------------------
  //- on click of submit button, shows modal with info
  $contact.on('click', openModal);
  //- on click of $closeBtn, empties and disappears modal
  $closeBtn.on('click', closeModal);
  // --------------------------------------------------------

// ===============DATE for footer copyright====================
  $(document).ready(function() {
  document.getElementById('date').appendChild(
    document.createTextNode(
      new Date().getFullYear()
    )
  );
});
// ============================================================

}); /// end of window onload

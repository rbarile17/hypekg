// Load citation modal on 'Cite' click.
$('.js-cite-modal').click(function (e) {
  let modal = $('#modal');
  let filename = $(this).attr('data-filename');

  modal.find('.modal-body code').load(filename)

  modal[0].classList.toggle('hidden')
});

$('#closeModal').click(function (e) {
  let modal = $('#modal');
  modal[0].classList.add('hidden')
});
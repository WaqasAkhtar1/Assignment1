$(document).ready(function() {
// Add Row
$('#add-row-btn').on('click', function() {
  var rowHeader = $('#add-row-header').val();
  console.log("rowHeader:", rowHeader);
  var lastColIndex = $('#schedule-table > thead > tr > th').length - 1;
  $('#schedule-table > tbody:last-child').append('<tr><th>' + rowHeader + '</th></tr>');
  $('#schedule-table > tbody > tr:last-child').append('<td></td>'.repeat(lastColIndex));

  // Remove row header from select options
  $('.add-header-select option[value="' + rowHeader + '"]').remove();
});

// Add Column
$('#add-col-btn').on('click', function() {
  var colHeader = $('#add-col-header').val();
  console.log("colHeader:", colHeader);
  $('#schedule-table > thead > tr').append('<th>' + colHeader + '</th>');
  $('#schedule-table > tbody > tr').each(function() {
    $(this).append('<td></td>');
  });

  // Remove column header from select options
  $('.add-header-select option[value="' + colHeader + '"]').remove();
});


    // Add Agenda
    $('#add-agenda-btn').on('click', function() {
      var agendaHeader = $('#add-agenda-header').val();
      var agenda1Header = $('#add-agenda1-header').val();
      var agendaText = $('#add-agenda-input').val();
      var cell = $('#schedule-table > tbody > tr').eq($('#add-agenda-header')[0].selectedIndex).find('td').eq($('#add-agenda1-header')[0].selectedIndex);
      if (!cell.text()) {
        cell.text(agendaText);
        cell.append('<span class="delete-icon">&#10006;</span>');
      } else {
        alert('Cell already has an agenda');
      }
    });
  
    // Delete Agenda
    $('#schedule-table').on('mouseenter', 'td', function() {
      $(this).find('.delete-icon').css('visibility', 'visible');
    }).on('mouseleave', 'td', function() {
      $(this).find('.delete-icon').css('visibility', 'hidden');
    }).on('click', '.delete-icon', function() {
      $(this).parent('td').empty();
    });
  });
  
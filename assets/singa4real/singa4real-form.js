$(document).on("submit", ".ajaxform", function(event)
{
    event.preventDefault();
var frm = $(this);
    $.ajax({
        type: frm.attr("method"),
        url: frm.attr("action"),
        dataType: "JSON",
        data: new FormData(this),
        processData: false,
        contentType: false,
        success: function (data, status)
        {
          if (data.stat == "success") {
                frm.find("div .alert-danger").attr("hidden", "hidden");
				console.log(data.returned);
                window.location.href= data.returned;
            } else {
                frm.find("div .alert-success").attr("hidden", "hidden");
                frm.find("div .alert-danger").removeAttr("hidden");
				frm.find("div .alert-danger").html(data.returned);
				
            }
        },
        error: function (xhr, desc, err)
        {
            frm.find("div .alert-success").attr("hidden", "hidden");
            frm.find("div .alert-danger").removeAttr("hidden");
			frm.find("div .alert-danger").html(desc);
        }
    });
});
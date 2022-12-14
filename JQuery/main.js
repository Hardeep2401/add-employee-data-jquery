$(document).ready(function () {

    $('#myForm input').on('keyup', function () {
        let empty = false;

        $('#myForm input').each(function () {
            if ($(this).val().length == 0) {
                empty = true;
            }
        });

        if (empty)
            $('#submit').attr('disabled', true);
        else {
            $('#submit').attr('disabled', false);
        }
    });

    $("#submit").on("click", function () {

        var tableRow = "<tr><td><input type='checkbox' class='select'></td>";
        $("#myForm").find("input,select").each(function () {
            tableRow += "<td>" + this.value + "</td> ";
        });
        tableRow += "<td style='min-width:300px'><button class='btn btn-danger d-inline-block delete'>DELETE</button> <button class ='btn btn-success edit' data-bs-toggle='modal' data-bs-target='#myModal'>EDIT </button></td> </tr>";
        $("#Table tbody").append(tableRow);
        return false;
    });
    $("#clear").click(function () {
        $(this).closest("form").get(0).reset();
    });


});

$("#Table > tbody").each(function () {
    $(this).on("click", "button.delete", function () {
        $(this).closest("tr").remove();

    });
    $(this).on("click", "button.edit", function () {
        $('#myModal').appendTo("body").modal("show");
        $("#update").attr("value", $(this).closest("tr").index());
        $("#firstname").val($(this).closest("tr").find("td:nth-child(2)").text());
        $("#lastname").val($(this).closest("tr").find("td:nth-child(3)").text());
        $("#mail").val($(this).closest("tr").find("td:nth-child(4)").text());
        $("#mobile").val($(this).closest("tr").find("td:nth-child(5)").text());
    });

    $("#update").click(function () {
        let $tableCells = $("#Table > tbody > tr").eq($(this).attr("value"));
        $tableCells.find("td:nth-child(2)").text($("#firstname").val());
        $tableCells.find("td:nth-child(3)").text($("#lastname").val());
        $tableCells.find("td:nth-child(4)").text($("#mail").val());
        $tableCells.find("td:nth-child(5)").text($("#mobile").val());
        $("span.success").removeClass("d-none");
    });

    $(".selectAll").click(function () {
        if ($(this).is(":checked")) {
            $(".select").each(function () {
                $(this).prop("checked", true);
            });
        } else {
            $(".select").each(function () {
                $(this).prop("checked", false);
            });
        }
    });


});

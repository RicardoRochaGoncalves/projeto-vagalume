$('#add_camera').submit(function(event){
    alert("Cadastro realizado com sucesso!")
})

$('#add_gestor').submit(function(event){
    alert("Cadastro realizado com sucesso!")
})

$('#add_estabelecimento').submit(function(event){
    alert("Cadastro realizado com sucesso!")
})

$("#update_camera").submit(function(event){
    event.preventDefault()

    var unindexed_array = $(this).serializeArray()
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })

    console.log(data)

    var request = {
        "url": `http://localhost:3000/api/cameras/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
        alert("Informações atualizadas com sucesso!")
    })
})

$("#update_gestor").submit(function(event){
    event.preventDefault()

    var unindexed_array = $(this).serializeArray()
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })

    console.log(data)

    var request = {
        "url": `http://localhost:3000/api/gestores/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
        alert("Informações atualizadas com sucesso!")
    })
}) 

$("#update_estabelecimento").submit(function(event){
    event.preventDefault()

    var unindexed_array = $(this).serializeArray()
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })

    console.log(data)

    var request = {
        "url": `http://localhost:3000/api/estabelecimentos/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
        alert("Informações atualizadas com sucesso!")
    })
}) 

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.deletecamera")
    $ondelete.click(function(){
        var id = $(this).attr("data-camera-id")
    
        var request = {
            "url": `http://localhost:3000/api/cameras/${id}`,
            "method": "DELETE"
        }

        if(confirm("Tem certeza que deseja deletar esta camera?")){
            $.ajax(request).done(function(response){
                alert("Camera deletada com sucesso!")
                location.reload()
            })
        }
    })
}

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.deletegestor")
    $ondelete.click(function(){
        var id = $(this).attr("data-gestor-id")
    
        var request = {
            "url": `http://localhost:3000/api/gestores/${id}`,
            "method": "DELETE"
        }

        if(confirm("Tem certeza que deseja deletar esse gestor?")){
            $.ajax(request).done(function(response){
                alert("Gestor deletado com sucesso!")
                location.reload()
            })
        }
    })

}


if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.deleteestabelecimento")
    $ondelete.click(function(){
        var id = $(this).attr("data-estabelecimento-id")
    
        var request = {
            "url": `http://localhost:3000/api/estabelecimentos/${id}`,
            "method": "DELETE"
        }

        if(confirm("Tem certeza que deseja deletar esse estabelecimento?")){
            $.ajax(request).done(function(response){
                alert("Estabelecimento deletado com sucesso!")
                location.reload()
            })
        }
    })

}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("anuncioForm").addEventListener("submit", function(event) {
        event.preventDefault();

        // Obter valores dos campos do formulário
        const categoria = document.getElementById("categoria").value.trim();
        const estado = document.getElementById("estado").value.trim();
        const notaFiscal = document.getElementById("notaFiscal").value;
        const email = document.getElementById("email").value.trim();
        const cidade = document.getElementById("cidade").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const foto = document.getElementById("foto").files[0];

        // Verificar se todos os campos estão preenchidos
        if (!categoria || !estado || !email || !cidade || !telefone || !foto) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Atualizar informações do anúncio
        document.getElementById("produtoCategoria").innerText = "Categoria: " + categoria;
        document.getElementById("produtoEstado").innerText = "Estado: " + estado;
        document.getElementById("produtoNotaFiscal").innerText = "Nota Fiscal: " + notaFiscal;
        document.getElementById("produtoEmail").innerText = "Email: " + email;
        document.getElementById("produtoCidade").innerText = "Cidade: " + cidade;
        document.getElementById("produtoTelefone").innerText = "Telefone/Whatsapp: " + telefone;

        // Atualizar a imagem
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("produtoImagem").src = e.target.result;
        }
        reader.readAsDataURL(foto);

        // Mostrar o anúncio criado
        document.getElementById("anuncioCriado").style.display = "block";

        // Fechar o modal
        $('#anuncioModal').modal('hide');
    });
});
import React from 'react'


const Relatorios = () => {
  return (
    <main class="container mx-auto sm:px-4 mx-auto sm:px-4 gx-5">
      <h2 class="mt-5 my-2">Filtrar Estatísticas</h2>
          <div class="relative flex items-stretch w-full mb-3">
              <label class="input-group-text" for="inputGroupSelect01">Curso: </label>
              <select class="form-select" id="inputGroupSelect01">
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
              </select>
          </div>
          <div class="relative flex items-stretch w-full mb-3">
              <label class="input-group-text" for="inputGroupSelect01">Função: </label>
              <select class="form-select" id="inputGroupSelect01">
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
              </select>
          </div>
          <div class="relative flex items-stretch w-full mb-3">
              <label class="input-group-text" for="inputGroupSelect01">Mês de análise: </label>
              <select class="form-select" id="inputGroupSelect01">
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
              </select>
          </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    </main>
  )
}

export default Relatorios
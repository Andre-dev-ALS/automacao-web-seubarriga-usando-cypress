afterEach(1, function () {
  
  const dataHoraAtual = new Date();

// Formatando a data e hora em uma única string
const currentDateAndTime   =
  `${String(dataHoraAtual.getDate()).padStart(2, '0')}-` + // Dia com dois dígitos
  `${String(dataHoraAtual.getMonth() + 1).padStart(2, '0')}-` + // Mês com dois dígitos
  `${dataHoraAtual.getFullYear()} ` + // Ano
  `${String(dataHoraAtual.getHours()).padStart(2, '0')}.` + // Hora com dois dígitos
  `${String(dataHoraAtual.getMinutes()).padStart(2, '0')}.` + // Minutos com dois dígitos
  `${String(dataHoraAtual.getMilliseconds()).padStart(3, '0')}`; // Milissegundos com três dígitos

  let fileName = this.currentTest.title;
  if (this.currentTest.state == 'passed') {
    cy.screenshot(`${dataHoraAtual.getFullYear()}/${dataHoraAtual.getMonth() + 1}/${dataHoraAtual.getDate()}/passed/${fileName}/${fileName}-(passed)-${currentDateAndTime}`);
  } else {
    cy.screenshot('failed/' + fileName + '-(failed)-' + currentDateAndTime);
  }  
})


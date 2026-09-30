import { useState } from 'react';

function DocenteForm({
  docenteToEdit,
  handleSubmit,
  setActiveScreen
}) {
  const [nome, setNome] = useState(docenteToEdit?.nome || '');
  const [cpf, setCpf] = useState(docenteToEdit?.cpf || '');
  const [formacao, setFormacao] = useState(docenteToEdit?.formacao || '');

  const [emailInstitucional, setEmailInstitucional] = useState(
    docenteToEdit?.emailInstitucional || ''
  );

  const [emailParticular, setEmailParticular] = useState(
    docenteToEdit?.emailParticular || ''
  );

  const [telefone, setTelefone] = useState(
    docenteToEdit?.telefone || ''
  );

  const [endereco, setEndereco] = useState(
    docenteToEdit?.endereco || ''
  );

  const [numero, setNumero] = useState(
    docenteToEdit?.numero || ''
  );

  const [cidade, setCidade] = useState(
    docenteToEdit?.cidade || ''
  );

  const [cep, setCep] = useState(
    docenteToEdit?.cep || ''
  );

  const [uf, setUf] = useState(
    docenteToEdit?.uf || ''
  );

  const [erros, setErros] = useState({});

  function validar() {
    const novosErros = {};

    if (!nome.trim() || nome.trim().length < 3) {
      novosErros.nome = 'O nome deve ter pelo menos 3 caracteres.';
    }

    if (!cpf.trim()) {
      novosErros.cpf = 'CPF é obrigatório.';
    } else if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
      novosErros.cpf = 'CPF inválido.';
    }

    if (!formacao.trim()) {
      novosErros.formacao = 'Formação/Área de atuação é obrigatória.';
    }

    if (!emailInstitucional.trim()) {
      novosErros.emailInstitucional =
        'E-mail institucional é obrigatório.';
    } else if (!emailInstitucional.includes('@')) {
      novosErros.emailInstitucional = 'E-mail inválido.';
    }

    if (
      emailParticular.trim() &&
      !emailParticular.includes('@')
    ) {
      novosErros.emailParticular = 'E-mail inválido.';
    }

    if (!telefone.trim()) {
      novosErros.telefone = 'Telefone é obrigatório.';
    }

    if (!endereco.trim()) {
      novosErros.endereco = 'Endereço é obrigatório.';
    }

    if (!numero.trim()) {
      novosErros.numero = 'Número é obrigatório.';
    }

    if (!cidade.trim()) {
      novosErros.cidade = 'Cidade é obrigatória.';
    }

    if (!cep.trim()) {
      novosErros.cep = 'CEP é obrigatório.';
    }

    if (!uf) {
      novosErros.uf = 'Selecione um estado.';
    }

    return novosErros;
  }

  function enviarFormulario(event) {
    event.preventDefault();

    const novosErros = validar();

    setErros(novosErros);

    if (Object.keys(novosErros).length > 0) {
      return;
    }

    const docente = {
      id: docenteToEdit?.id || Date.now(),
      nome,
      cpf,
      formacao,
      emailInstitucional,
      emailParticular,
      telefone,
      endereco,
      numero,
      cidade,
      cep,
      uf
    };

    handleSubmit(docente);
  }

  function aplicarMascaraCPF(valor) {
    valor = valor.replace(/\D/g, '').slice(0, 11);

    valor = valor.replace(
      /(\d{3})(\d)/,
      '$1.$2'
    );

    valor = valor.replace(
      /(\d{3})(\d)/,
      '$1.$2'
    );

    valor = valor.replace(
      /(\d{3})(\d{1,2})$/,
      '$1-$2'
    );

    return valor;
  }

  function aplicarMascaraTelefone(valor) {
    valor = valor.replace(/\D/g, '').slice(0, 11);

    if (valor.length <= 10) {
      return valor.replace(
        /(\d{2})(\d{4})(\d{0,4})/,
        '($1) $2-$3'
      );
    }

    return valor.replace(
      /(\d{2})(\d{5})(\d{0,4})/,
      '($1) $2-$3'
    );
  }

  function aplicarMascaraCEP(valor) {
    valor = valor.replace(/\D/g, '').slice(0, 8);

    return valor.replace(
      /(\d{5})(\d)/,
      '$1-$2'
    );
  }

  return (
    <div className="container">
      <h2>
        {docenteToEdit
          ? 'Alterar Docente'
          : 'Cadastrar Novo Docente'}
      </h2>

      <form onSubmit={enviarFormulario}>

        <fieldset>
          <legend>Dados Pessoais</legend>

          <label>Nome Completo</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          {erros.nome && <p className="erro">{erros.nome}</p>}

          <label>CPF</label>
          <input
            type="text"
            value={cpf}
            placeholder="000.000.000-00"
            onChange={(e) =>
              setCpf(aplicarMascaraCPF(e.target.value))
            }
          />
          {erros.cpf && <p className="erro">{erros.cpf}</p>}

          <label>Formação/Área de Atuação</label>
          <input
            type="text"
            value={formacao}
            onChange={(e) => setFormacao(e.target.value)}
          />
          {erros.formacao && (
            <p className="erro">{erros.formacao}</p>
          )}
        </fieldset>

        <fieldset>
          <legend>Contatos</legend>

          <label>E-mail Institucional</label>
          <input
            type="email"
            value={emailInstitucional}
            onChange={(e) =>
              setEmailInstitucional(e.target.value)
            }
          />
          {erros.emailInstitucional && (
            <p className="erro">{erros.emailInstitucional}</p>
          )}

          <label>E-mail Particular</label>
          <input
            type="email"
            value={emailParticular}
            onChange={(e) =>
              setEmailParticular(e.target.value)
            }
          />
          {erros.emailParticular && (
            <p className="erro">{erros.emailParticular}</p>
          )}

          <label>Telefone Celular</label>
          <input
            type="tel"
            value={telefone}
            placeholder="(00) 00000-0000"
            onChange={(e) =>
              setTelefone(aplicarMascaraTelefone(e.target.value))
            }
          />
          {erros.telefone && (
            <p className="erro">{erros.telefone}</p>
          )}
        </fieldset>

        <fieldset>
          <legend>Endereço</legend>

          <label>Endereço Residencial</label>
          <input
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />
          {erros.endereco && (
            <p className="erro">{erros.endereco}</p>
          )}

          <label>Número</label>
          <input
            type="text"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
          {erros.numero && (
            <p className="erro">{erros.numero}</p>
          )}

          <label>Cidade</label>
          <input
            type="text"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          />
          {erros.cidade && (
            <p className="erro">{erros.cidade}</p>
          )}

          <label>CEP</label>
          <input
            type="text"
            value={cep}
            placeholder="00000-000"
            onChange={(e) =>
              setCep(aplicarMascaraCEP(e.target.value))
            }
          />
          {erros.cep && <p className="erro">{erros.cep}</p>}

          <label>UF</label>
          <select
            value={uf}
            onChange={(e) => setUf(e.target.value)}
          >
            <option value="">Selecione</option>
            <option value="AC">AC</option>
            <option value="AL">AL</option>
            <option value="AP">AP</option>
            <option value="AM">AM</option>
            <option value="BA">BA</option>
            <option value="CE">CE</option>
            <option value="DF">DF</option>
            <option value="ES">ES</option>
            <option value="GO">GO</option>
            <option value="MA">MA</option>
            <option value="MT">MT</option>
            <option value="MS">MS</option>
            <option value="MG">MG</option>
            <option value="PA">PA</option>
            <option value="PB">PB</option>
            <option value="PR">PR</option>
            <option value="PE">PE</option>
            <option value="PI">PI</option>
            <option value="RJ">RJ</option>
            <option value="RN">RN</option>
            <option value="RS">RS</option>
            <option value="RO">RO</option>
            <option value="RR">RR</option>
            <option value="SC">SC</option>
            <option value="SP">SP</option>
            <option value="SE">SE</option>
            <option value="TO">TO</option>
          </select>
          {erros.uf && <p className="erro">{erros.uf}</p>}
        </fieldset>

        <button type="submit">
          {docenteToEdit ? 'Salvar Alterações' : 'Cadastrar'}
        </button>

        <button
          type="button"
          onClick={() => setActiveScreen('lista')}
        >
          Voltar
        </button>

      </form>
    </div>
  );
}

export default DocenteForm;
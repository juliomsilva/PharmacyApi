package com.br.clamed.apipharmacy.Dto;


import com.br.clamed.apipharmacy.Entity.medicamentoEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class listaMedicamentoOutput {
    private int status_code;
    private String mensagem;
    private List<medicamentoEntity> dados;

}

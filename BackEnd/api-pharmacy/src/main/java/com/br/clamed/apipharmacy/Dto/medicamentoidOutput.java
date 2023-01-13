package com.br.clamed.apipharmacy.Dto;


import com.br.clamed.apipharmacy.Entity.medicamentoEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Optional;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class medicamentoidOutput {
    private int status_code;
    private String mensagem;
    private Optional<medicamentoEntity> dados;

}

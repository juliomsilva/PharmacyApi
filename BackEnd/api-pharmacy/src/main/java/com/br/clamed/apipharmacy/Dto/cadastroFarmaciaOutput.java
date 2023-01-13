package com.br.clamed.apipharmacy.Dto;

import com.br.clamed.apipharmacy.Entity.farmaciaEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class cadastroFarmaciaOutput {


    private int status_code;
    private String mensagem;

    private farmaciaEntity dados;


}

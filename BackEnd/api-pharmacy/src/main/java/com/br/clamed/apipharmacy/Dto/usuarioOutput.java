package com.br.clamed.apipharmacy.Dto;

import com.br.clamed.apipharmacy.Entity.usuarioEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class usuarioOutput {

    private int status_code;
    private String mensagem;
    private usuarioEntity dados;



}

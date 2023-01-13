package com.br.clamed.apipharmacy.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.http.HttpStatus;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Error {

    private int status_code;
    private String mensagem;
    private HttpStatus erro;

    private String causa;


}

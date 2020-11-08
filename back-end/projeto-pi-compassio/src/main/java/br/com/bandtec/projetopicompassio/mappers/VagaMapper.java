package br.com.bandtec.projetopicompassio.mappers;

import br.com.bandtec.projetopicompassio.dominios.Vaga;
import br.com.bandtec.projetopicompassio.dto.VagaDTO;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface VagaMapper {

    Vaga toVaga(VagaDTO vagaDTO);
    VagaDTO toVagaDTO(Vaga vaga);
    List<Vaga> toListVaga(List<VagaDTO> listVagaDTO);
    List<VagaDTO> toListVagaDTO(List<Vaga> listVaga);
}

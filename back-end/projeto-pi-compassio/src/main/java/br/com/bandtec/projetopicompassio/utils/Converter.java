package br.com.bandtec.projetopicompassio.utils;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class Converter {

    public static String LocalDateToString(LocalDate date, String pattern) {
        return date.format(DateTimeFormatter.ofPattern(pattern));
    }
}

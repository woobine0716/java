package day03;

import java.util.Scanner;

public class StringADV {
    public static void main(String[] args) {
        String icecream = "chocolate";
        // icecream.length() // 몇 글자인지알려줌
        // icecream.charAt(3) 3 번째의 알파벳을 돌려줌
        // icecream.substring(0,3) 0~2번째 까지 짤라서 돌려줌
        // icecream.contains("co") "co"를 갖는지 true or false 로 알려줌
        // icecream.indexOf("h") 는 몇번째인지 돌려줌 없으면 -1 돌려줌
        // icecream.equals("choco") "choco"랑 똑같은지 물어봄 true/false로 돌려줌
        // icecream.equalsIgnoreCase("CHOCOLATE") 대소문자 상관없이 같은지 물어봄 true/false
        // icecream.toUpperCase() 대문자화 시켜줌
        // icecream.toLowerCase() 소문자화 시켜줌
        // icecream.replace() "a"를 "b"로 바꿔줌
        // icecream.replaceAll() "a"를 "b"로 모두 바꿔줌
        // icecream.startsWith("choco") "choco"로 시작하니? true/false

        //유저에게 비밀번호 설정을 입력 받고, 그 비밀번호가 8글자 이상이고 !표를 포함하면
        //올바르게 설정했습니다. 아니면 다시 설정해주세요.
//        System.out.println("사용하실 비밀번호를 입력하세요");
//        Scanner sc = new Scanner(System.in);
//        String password = sc.next();
//        boolean isLengthOver8 = password.length() >= 8;
//        boolean hasExckanatuib = password.contains("!");
        //String result = password.length() >= 8 && password.contains("!") ? "비밀번호 올바르게 설정" : "비밀번호 다시 설정하셈" ;
        // System.out.println();

        //1. 이메일을 입력받고, 형식에 맞는지 체크하기
        // @포함해야하고, .을 포함해야하고, naver or gmail만 포함해야합니다.
        System.out.println("이메일을 입력하세요.");
        Scanner sc = new Scanner(System.in);
        String email = sc.next();
        boolean hasAt = email.contains("@");
        boolean hasDOT = email.contains(".");
        boolean hasDomain = email.contains("naver") || email.contains("gmail");
        String emailResult = hasAt && hasDOT && hasDomain ? "올바른 이메일" : "이메일을 제대로 작성하십쇼 줘 패기전에 ㅋ";
        System.out.println(emailResult);


        //2. 과일 이름을 입력 받고, 6글자 이하이면 대문자화하고 아니면 앞에 3글자만 나타내기
        // ex) apple > APPLE, strawberry > str
        System.out.println("과일 입력");
        String fruit = sc.next();
        String result1 = fruit.length() <= 6 ? fruit.toUpperCase() : fruit.substring(0,3);
        System.out.println(result1);










    }
}

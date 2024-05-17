package typecasting;

public class TypeCasting {
    public static void main(String[] args) {
        //타입변환(타입캐스팅)
        //좁은 범위에서 넓은 범위로 타입 변환은 암묵적 타입 캐스팅 가능
        //넓은 범위에서 좁은 범위로 타입 변환은 명시적 타입 캐스팅 필수
        //숫자: 정수 > 실수 (o), 실수 > 정수(x)
        //동물: 고양이 > 동물 o, 동물 > 고양이 x
        // cat > animal o, animal > (animal) cat

//        int a = 100; //정수형
//        double b = 3.14; //실수형
//        char c = "v"; //문자형
//        String d = "자바 꿀잼" //문자열형
//        boolean e = true; //불리언형 or 논리형

        int a = 100;
        double b = a;

        double c = 3.14;
        int d = (int) c;
    }
}

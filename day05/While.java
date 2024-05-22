package day05;

import java.util.Scanner;

public class While {
    public static void main(String[] args) {
        //for(int i=0;...)
//        int a = 0;
//        while (a < 10) {
//            System.out.println("수업 언제끝남?");
//            //1번. a++
//            //2번.
//            a++;
//            if (a == 7) {
//                break;
//            }
//        }
        //사칙연산 프로그램 시작!
        //두 정수를 입력하세요
        // 첫 번째 정수
        // 두 번째 정수
        // 원하는 결과를 누르세요
        //1. 더하기 프로그램
        //2. 빼기 프로그램
        //3. 곱셈 프로그램
        //4. 제곱 프로그램
        //5. 나누기 프로그램
        //6.나머지 프로그램
        //그 외 나머지 숫자는 번호 오류 다시 입력하세요
        System.out.println("사칙연산 프로그램 시작!");
        Scanner sc = new Scanner(System.in);
        while (true){
            System.out.println("첫 번째 정수를 입력하세요.");
            int a = sc.nextInt();
            System.out.println("두 번째 정수를 입력하세요.");
            int b = sc.nextInt();
            System.out.println("원하는 결과를 누르세요.");
            System.out.println("0.프로그램 종료" + "1.더하기" + "2.빼기" + "3.곱하기" + "4.제곱" + "5.나누기" + "6.나머지");
            int codeNumber = sc.nextInt();
            int result;
            switch (codeNumber){
                case 0:
                    break;
                    case 1:
                        result = a + b;
                        System.out.println("합:" + result);
                        break;
                        case 2:
                            result = a - b;
                            System.out.println("차" + result);
                            break;
                            case 3:
                                result = a * b;
                                System.out.println("곱" + result);
                                break;
                                case 4:
                                    result = a;
                                    for(int i = 1; i <= b; i++) {
                                        result *= a;
                                    }
                                    System.out.println("제곱" + result);
                                    break;
                                    case 5:
                                        result = a / b;
                                        System.out.println("나누기" + result);
                                        break;
                                        case 6:
                                            result = a % b;
                                            System.out.println("나머지" + result);
                                            break;
                default:
                    System.out.println("번호 입력 오류입니다.");
                    break;
            }
            System.out.println("프로그램을 종료합니다.");
        }
    }
}

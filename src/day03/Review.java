package day03;

import java.util.Scanner;

public class Review {
    public static void main(String[] args) {
        System.out.println("당신의 나이는?");
        Scanner sc = new Scanner(System.in);
        int age = sc.nextInt();
        int birth = 2025 - age;
        System.out.println("당신은" + birth + "년생이군요");
        //2.반지름을 입력하면 원의 넓이 나오게
        //ex) 반지름 입력: 10 > 3.14*10*10
        System.out.println("반지름 입력");
        int radius  = sc.nextInt();
        double area = sc.nextDouble();

    }
}

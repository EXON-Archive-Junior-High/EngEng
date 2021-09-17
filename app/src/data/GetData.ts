import fs from 'fs'

fs.writeFileSync('./data.txt', `
The issue                   your attention.
그 사안은 여러분의 관심을 필요로 합니다.
The law                   us to get some training.
그 법은 우리가 훈련을 받을 것을 요구한다.
You can                   money to the poor.
너는 불우이웃에게 돈을 기부할 수 있다.
She                   to winning the game.
그녀는 경기에 이기는 데 기여했다.
We donated our old books to                  .
우리는 오래된 책을 자선 단체에 기부했다.
I meet her regularly at                   events.
나는 그녀를 자선 행사에서 정기적으로 만난다.
Students                   the club in 2018.
학생들은 2018년에 그 동아리를 설립했다.
The police help to                   law and order. 
경찰이 법과 질서를 확립하는 데 도움을 준다.
Some tourist spots give                   with a student card.
몇몇 관광지는 학생증이 있으면 혜택을 준다.
It’s painful, but you have to face                  .
고통스럽지만 당신은 현실을 받아들여야 한다.
Seconds are                   of time.
초는 시간의 단위이다.
Last month they sold 1,000                   of that model of car.
지난달에 그들은 그 모델의 차를 천 대 팔았다.
The meter is an international                  .
미터는 국제 표준이다.
All hand-baggage was X-rayed. This is now                   practice.
모든 손가방은 엑스레이 검사를 한다. 이것은 일반적인 관례이다.
Spring                   to be warmer now.
요즘 봄이 더 따뜻해지는 경향이 있다.
Watching too much TV is                   to obesity.
TV를 너무 많이 보는 건 비만과 관련 있다.
Some people do not have                   cinema etiquette. 
어떤 사람들은 적절한 극장 예절을 지키지 않는다.
We won’t forget all your                  .
우리는 당신의 노고를 잊지 않을 것입니다.
We                   all day to find a solution.
우리는 해결책을 찾기 위해 하루 종일 애썼다.
George is                    a job.
조지는 일자리를 찾고 있다.

`.replace(/\                 /gi, ' ______'))

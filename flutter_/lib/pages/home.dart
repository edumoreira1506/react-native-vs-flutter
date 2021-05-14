import 'package:flutter/material.dart';
import 'package:flutter_/widgets/button.dart';
import 'package:flutter_/widgets/input.dart';

class HomePage extends StatefulWidget {
  HomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  TextEditingController _amountOfItemsController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: SingleChildScrollView(
        child: Column(
          children: <Widget>[
            Container(
              height: 30,
              padding:
                  EdgeInsets.only(left: 10.0, right: 10.0, top: 2, bottom: 2),
              margin: EdgeInsets.only(
                  left: 80.0, right: 80.0, top: 20.0, bottom: 20.0),
              decoration: BoxDecoration(
                  borderRadius: BorderRadius.all(Radius.circular(4)),
                  border: Border.all(color: Colors.black, width: 2)),
              child: Row(
                children: [
                  Expanded(
                    child: Input(
                      type: TextInputType.number,
                      controller: _amountOfItemsController,
                    ),
                  ),
                  Button(
                      onTap: () {
                        print('tab');
                      },
                      text: 'BOTTOM')
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

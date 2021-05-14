import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class Item extends StatelessWidget {
  final String name;
  final String description;

  Item({this.description, this.name});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.only(top: 20, left: 10, bottom: 20),
      child: Column(children: [
        Text(
          this.name,
          style: TextStyle(
            color: Colors.white,
            fontSize: 30,
            fontWeight: FontWeight.bold,
          ),
        ),
        Text(
          this.description,
          style: TextStyle(color: Colors.white, fontStyle: FontStyle.italic),
        )
      ]),
      margin: EdgeInsets.only(bottom: 10),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(4),
        color: Color.fromRGBO(26, 115, 232, 1),
      ),
    );
  }
}

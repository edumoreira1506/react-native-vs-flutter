import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class Input extends StatelessWidget {
  final TextEditingController controller;
  final TextInputType type;

  Input({this.controller, this.type});

  @override
  Widget build(BuildContext context) {
    return TextField(
        controller: this.controller,
        keyboardType: this.type,
        style: TextStyle(height: 30, fontSize: 15),
        showCursor: false,
        decoration: InputDecoration(
          contentPadding: EdgeInsets.fromLTRB(0, 0, 0, 5),
          border: InputBorder.none,
        ));
  }
}
